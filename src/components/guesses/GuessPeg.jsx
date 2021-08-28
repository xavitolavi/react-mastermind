import React, { useContext, useEffect, useState } from 'react';
import GameContext from '../../context/game-context';

import classes from './GuessPeg.module.css';

const GuessPeg = (props) => {
    const [ colorPeg, setColorPeg ] = useState('');
    const [ isColored, setIsColored ] = useState(false);
    const [ isColorSelected, setIsColorSelected ] = useState(false);
    
    const gameCtx = useContext(GameContext);
    const { selectedColor } = gameCtx; 
    
    const setColorClasses = `${classes.pegs} ${isColored ? classes[colorPeg] : ''} ${isColorSelected ? classes.colorSelected : ''}`;
    
    const setPegHandler = (e) => {
        e.preventDefault();
        if (props.row === gameCtx.guesses.length){
            if (selectedColor !== undefined || selectedColor !== "") {
                setIsColored(true);
                setColorPeg(selectedColor);
                props.onChangeColor(props.peg.id, selectedColor);
                gameCtx.addGame({
                    ...gameCtx,
                    selectedColor: ""
                })
            }
        }
    }

    useEffect(() => {
        for(let i = 0; i < gameCtx.secret_code.length; i++) {
            if(props.peg.id === 'lost'+i){
                setIsColored(true);
                setColorPeg(props.peg.color);
            }
        }
    }, [gameCtx])
    
    //UseEffect to remove the colors from the pegs when clicking the reset button
    useEffect(() => {
        setIsColored(false);
        gameCtx.guesses = [];
    }, [gameCtx.reference, gameCtx.reset])

    useEffect(() => {
        if (selectedColor !== "") {
            setIsColorSelected(true);
        }
        else {
            setIsColorSelected(false);
        }
    }, [selectedColor])

    return (
        <div className={setColorClasses} onClick={setPegHandler}>
            
        </div>
    )
}

export default GuessPeg
