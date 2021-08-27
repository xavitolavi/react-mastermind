import React, { useContext, useEffect, useState } from 'react'
import ConfirmButton from './ConfirmButton'
import NewGameButton from './NewGameButton'
import ResetButton from './ResetButton'

import classes from './ButtonsWrapper.module.css'
import GameContext from '../context/game-context'

const ButtonsWrapper = () => {
    const [isPlaying, setisPlaying] = useState(false);
    const gameCtx = useContext(GameContext);

    const { status } = gameCtx;

    const buttonClasses = `${classes.topButtons} ${isPlaying ? classes.show : ''}`

    useEffect(() => {
        if (status !== undefined) {
            setisPlaying(true);
        }
        else {
            setisPlaying(false);
        }
    }, [status]);

    return (
        <div className={classes.buttonWrapper}>
            <div className={buttonClasses}>
                <ConfirmButton />
                <ResetButton />
            </div>
            <div className={classes.bottomButton}>
                <NewGameButton />
            </div>
        </div>
    )
}

export default ButtonsWrapper
