import React, { useContext, useEffect, useState } from 'react'
import GameContext from '../context/game-context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import classes from './ConfirmButton.module.css'

const ConfirmButton = () => {
    const [isFull, setIsFull] = useState(false);

    const gameCtx = useContext(GameContext);

    const confirmEnabledClasses = `${isFull ? classes.enabled : classes.disabled}`;

    //We enable and disabled the confirm button with this useEffect
    useEffect(() => {
        if (gameCtx.code !== undefined && gameCtx.code.length === 4){
            setIsFull(true);
        }
        else{
            setIsFull(false);
        }
    }, [gameCtx])
    console.log(gameCtx)
    async function compareCodeHandler(e) {
        e.preventDefault();

        if (gameCtx.code.length === 4) {
            const response = await fetch('http://localhost:8000/api/games/'+gameCtx.id+'/guesses/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 'code': gameCtx.code })
            });

            //We add the new recieved feedback data to the context so we can add the feedback pegs or the new status
            //And also we reset the code array to start again and set the confirm button off 
            const data = await response.json();
            gameCtx.addGame({
                ...gameCtx,
                status: data.status,
                guesses: data.guesses,
                code: []
            })
        }
    }
    

    return (
        <button className={confirmEnabledClasses} onClick={compareCodeHandler}>
            <FontAwesomeIcon className={classes.icon} icon={faCheck} />
        </button>
    )
}

export default ConfirmButton
