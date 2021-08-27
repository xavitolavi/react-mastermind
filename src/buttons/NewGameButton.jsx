import React, { useContext } from 'react';
import GameContext from '../context/game-context';

import classes from './NewGameButton.module.css';

const NewGameButton = () => {
    const gameCtx = useContext(GameContext);

    async function newGameHandler() {
        const response = await fetch('http://localhost:8000/api/games/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ num_colors: 6, num_slots: 4 })}
        );

        const data = await response.json();

        gameCtx.addGame({
            reference: data.reference,
            colors: data.colors,
            id: data.id,
            secret_code: data.secret_code,
            num_slots: data.num_slots,
            status: data.status,
            num_colors: data.num_colors,
            max_guesses: data.max_guesses,
            guesses: data.guesses
        })
    }

    return (
        <button className={classes.newGame} onClick={newGameHandler}>
            New game
        </button>
    )
}

export default NewGameButton
