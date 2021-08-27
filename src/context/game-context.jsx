import React from 'react';

const GameContext = React.createContext({
        reference: "",
        colors: [],
        id: 1,
        secret_code: [],
        num_slots: 4,
        status: "running",
        num_colors: 6,
        max_guesses: 10,
        guesses: [],
        selectedColor: "",
        code: []
});

export default GameContext;