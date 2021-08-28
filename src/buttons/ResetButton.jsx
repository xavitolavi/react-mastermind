import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo } from '@fortawesome/free-solid-svg-icons'

import classes from './ResetButton.module.css'
import GameContext from '../context/game-context'

const ResetButton = () => {
    const [reset, setReset] = useState(false);
    const [isFill, setIsFill] = useState(false);
    const gameCtx = useContext(GameContext);
    const resetEnabledClasses = `${isFill ? classes.enabled : classes.disabled}`;
    const checker = arr => arr.every(v => v !== 'grey');

    const resetRowHandler = (e) => {
        e.preventDefault();
        if (gameCtx.status === 'running') {
            //Custom Switch XD so we can use the reset button with the Context and reset everytime
            if(reset === true){
                setReset(false);
            } else {
                setReset(true);
            }

            //We empty the reset the array
            gameCtx.addGame({
                ...gameCtx,
                reset: reset,
                code: []
            })
        }
    }

    //UseEffect for setting styles of the buttion depending on the state
    useEffect(() => {
        if(gameCtx.code !== undefined){
            if (gameCtx.code.every(v => v === 'grey')){
                setIsFill(false)
            } else if (gameCtx.guesses.length > 0) {
                setIsFill(false)
            } else{
                setIsFill(true);
            }
        }
    }, [gameCtx, gameCtx.reset])

    return (
        <button className={resetEnabledClasses} onClick={resetRowHandler}>
            <FontAwesomeIcon className={classes.icon} icon={faRedo} />
        </button>
    )
}

export default ResetButton
