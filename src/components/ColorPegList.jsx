import React, { useContext } from 'react'
import GameContext from '../context/game-context';
import ColorPeg from './ColorPeg';

import classes from './ColorPegList.module.css'

const ColorPegList = () => {
    const gameCtx = useContext(GameContext);
    const { colors } = gameCtx;

    const guessesList = colors.map(color => (<ColorPeg key={color} color={color}/>))
    return (
        <div className={classes.pegs}>
            <ul>
                {guessesList}
            </ul>
        </div>
    )
}

export default ColorPegList
