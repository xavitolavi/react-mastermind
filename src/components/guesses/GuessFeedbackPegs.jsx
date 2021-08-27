import React, { useContext, useEffect, useState } from 'react';
import GameContext from '../../context/game-context';

import classes from './GuessFeedbackPegs.module.css'


const GuessFeedbackPegs = (props) => {
    const [feedBackPegs, setFeedBackPegs] = useState ([
        {
            'id': 1,
            'color': 'grey'
        },
        {
            'id': 2,
            'color': 'grey'
        },
        {
            'id': 3,
            'color': 'grey'
        },
        {
            'id': 4,
            'color': 'grey'
        }
    ])

    const gameCtx = useContext(GameContext);
    const {guesses} = gameCtx;

    useEffect(() => {
        if (guesses[props.row] !== undefined) {
            const feedbackPegArray = []
            for (let i = 0; i<guesses[props.row].black_pegs; i++){
                feedbackPegArray.push("black");
            }
            for (let i = 0; i<guesses[props.row].white_pegs; i++){
                feedbackPegArray.push("white");
            }

            //I SHOULD HAVE DONE THIS WITH SET STATE INSTEAD OF =
            feedBackPegs.forEach(peg => {
                if(feedbackPegArray[peg.id-1] !== undefined){
                    peg.color = feedbackPegArray[peg.id-1]
                }
            });

        }
    }, [guesses])

    const slots = feedBackPegs.map(peg => (<div className={`${classes.pegSlot} ${classes[peg.color]}`} key={peg.id}/>));
    return (
        <div className={classes.feedBackPegs}>
            {slots}
        </div>
    )
}

export default GuessFeedbackPegs
