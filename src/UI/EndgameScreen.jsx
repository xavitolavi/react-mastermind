import React, { useContext, useEffect } from 'react'
import GuessPegList from '../components/guesses/GuessPegList';
import GameContext from '../context/game-context'

import classes from './EndgameScreen.module.css'

const EndgameScreen = () => {
    const gameCtx = useContext(GameContext);

    return (
        <div>
            <div className={`${classes.message} ${classes.won} ${gameCtx.status === 'won' ? classes.show : ''}`}>
                <h1>VICTORY</h1>
            </div>
            <div className={`${classes.message} ${classes.lost} ${gameCtx.status === 'lost' ? classes.show : ''}`}>
                <h1>LOST</h1>
                <GuessPegList solution={gameCtx.secret_code}/>
            </div>
        </div>
    )
}

export default EndgameScreen
