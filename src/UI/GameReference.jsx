import React, {useContext, useEffect, useState} from 'react';
import GameContext from '../context/game-context';

import classes from './GameReference.module.css'

const GameReference = () => {
    const [ref, setRef] = useState(['']);
    const [isPlaying, setisPlaying] = useState(false);
    const gameCtx = useContext(GameContext);

    const { reference } = gameCtx;

    const gameRefClasses = `${classes.gameReference} ${isPlaying ? classes.show : ''}`

    useEffect(() => {
        if (reference !== "") {
            setRef(reference);
            setisPlaying(true);
        }
        else {
            setisPlaying(false);
        }
    }, [reference]);

    return (
        <div className={gameRefClasses}>
            <h3>Game Reference</h3>
            <h3>#{ref}</h3>
        </div>
    )
}

export default GameReference;