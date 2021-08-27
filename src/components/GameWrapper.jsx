import React from 'react'
import ButtonsWrapper from '../buttons/ButtonsWrapper'
import Board from './Board'
import ColorPegList from './ColorPegList'
import EndgameScreen from '../UI/EndgameScreen'

import classes from './GameWrapper.module.css'


const GameWrapper = () => {
    return (
        <div className={classes.gameWrapper}>
            <div className={classes.colors}>
                <ColorPegList />
            </div>
            <Board />
            <ButtonsWrapper />
            <EndgameScreen />
        </div>
    )
}

export default GameWrapper
