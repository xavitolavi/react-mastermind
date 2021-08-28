import React, { useContext, useEffect, useState } from 'react'
import GuessPeg from '../components/guesses/GuessPeg';
import GameContext from '../context/game-context'

import classes from './EndgameScreen.module.css'

const EndgameScreen = () => {
    const gameCtx = useContext(GameContext);
    const [pegs, setPegs] = useState([]);

    //COLORED PEGS WHEN GAME IS LOST NOT WORKING !!!
    useEffect(() => {
        if (gameCtx.status === 'lost') {
            for (var i = 0; i < gameCtx.secret_code.length; i++){
                pegs.push(
                    {
                        id: 'lost'+i,
                        'color': gameCtx.secret_code[i]
                    }
                )
            };
        }
    }, [gameCtx.status]);
    
    //We reset the peg array everytime we start a new game
    useEffect(() => {
        console.log(gameCtx.secret_code)
        setPegs([])
    }, [gameCtx.id])
    
    return (
        <div>
            <div className={`${classes.message} ${classes.won} ${gameCtx.status === 'won' ? classes.show : ''}`}>
                <h1>VICTORY</h1>
            </div>
            <div className={`${classes.message} ${classes.lost} ${gameCtx.status === 'lost' ? classes.show: ''}`}>
                <h1>LOST</h1>
                <div className={classes.secretCode}>
                {pegs.map(peg => (<GuessPeg key={peg.id} peg={peg}/>))}
                </div>
            </div>
        </div>
    )
}

export default EndgameScreen
