import React, { useContext, useEffect, useState } from 'react';
import GuessPegList from './GuessPegList';
import GuessFeedbackPegs from './GuessFeedbackPegs';

import classes from './GuessItems.module.css';
import GameContext from '../../context/game-context';

const Guess = (props) => {
    const [row, setRow] = useState();
    const [isSelected, setIsSelected] = useState(false);

    const gameCtx = useContext(GameContext);
    const { guesses } = gameCtx;

    const selectedClasses = `${isSelected ? classes.selected : ''}`;
  
    useEffect(() => {
        if (gameCtx.status === "running") {
            if (props.guess.id === guesses.length){
                setIsSelected(true);
                setRow(props.guess.id);
            }
            else{
                setIsSelected(false)
            }
        }
    }, [gameCtx])

    return (
        <li className={classes.guess} key={props.guess.id}>
            <div className={classes.slots}>
                <h2 className={selectedClasses}>{props.guess.number}</h2>
                <GuessPegList row={row}/>
            </div>
            <div className={classes.feedbackPegs}>
                <GuessFeedbackPegs row={row}/>
            </div>
        </li>
    )
}

export default Guess
