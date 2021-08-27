import React, { useContext } from 'react';
import GuessItems from './guesses/GuessItems';
import Card from '../UI/Card'

import classes from './GuessList.module.css'
import GameContext from '../context/game-context';


const GuessList = () => {
    const GUESSES = []
    const gameCtx = useContext(GameContext);

    for (var i = 0; i<gameCtx.max_guesses; i++){
        GUESSES.push(
            {
                id: i,
                number: '0'+(i+1)
            }
        )
    };

    const guessesList = GUESSES.map(guess => (<GuessItems key={guess.id} guess={guess}/>))
    return (
        <section className={classes.guessItem}>
            <Card>
                <ul>{guessesList}</ul>
            </Card>
        </section>
    )
}

export default GuessList
