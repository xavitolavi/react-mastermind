import React, { useContext, useEffect, useState } from 'react';
import GameContext from '../../context/game-context';

import classes from './GuessFeedbackPegs.module.css'


const GuessFeedbackPegs = (props) => {
    const gameCtx = useContext(GameContext);
    const {guesses} = gameCtx;
    //Placeholders for the feedback pegs
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

    //Everytime we start a new game we reset the feedback pegs (it was a bug)
    useEffect(() => {
        feedBackPegs.forEach(peg => {
             peg.color = 'grey'
        });
    }, [gameCtx.id, gameCtx.reset, gameCtx.reference])

    const slots = feedBackPegs.map(peg => (<div className={`${classes.pegSlot} ${classes[peg.color]}`} key={peg.id}/>));
    return (
        <div className={classes.feedBackPegs}>
            {slots}
        </div>
    )
}

export default GuessFeedbackPegs
