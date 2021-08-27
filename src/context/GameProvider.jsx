import React, { useReducer } from 'react'
import GameContext from './game-context'

const defaultGameState = {
    reference: "",
    colors: ["red", "blue", "green", "yellow", "orange", "white"],
    id: 1,
    secret_code: [],
    num_slots: 4,
    status: undefined,
    num_colors: 6,
    max_guesses: 10,
    guesses: [],
    selectedColor: "",
    code: [],
    reset: false,
};

const gameReducer = (state, action) => {
    if (action.type === 'NEW') {
        return {
            reference: action.game.reference,
            colors: action.game.colors,
            id: action.game.id,
            secret_code: action.game.secret_code,
            num_slots: action.game.num_slots,
            status: action.game.status,
            num_colors: action.game.num_colors,
            max_guesses: action.game.max_guesses,
            guesses: action.game.guesses,
            selectedColor: action.game.selectedColor,
            code: action.game.code,
            reset: action.game.reset,
        };
    }
    return defaultGameState;
}

const GameProvider = (props) => {
    const [gameState, dispatchGameAction] = useReducer(gameReducer, defaultGameState);

    const addGameHandler = (game) => {
        dispatchGameAction({type: 'NEW', game: game})
    }

    const gameContext = {
        reference: gameState.reference,
        colors: gameState.colors,
        id: gameState.id,
        secret_code: gameState.secret_code,
        num_slots: gameState.num_slots,
        status: gameState.status,
        num_colors: gameState.num_colors,
        max_guesses: gameState.max_guesses,
        guesses: gameState.guesses,
        selectedColor: gameState.selectedColor,
        code: gameState.code,
        reset: gameState.reset,
        addGame: addGameHandler,
    };

    return (
        <GameContext.Provider value={gameContext}>
            {props.children}
        </GameContext.Provider>
    )
}

export default GameProvider
