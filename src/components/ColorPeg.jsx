import React, { useContext, useEffect, useState } from 'react';
import GameContext from '../context/game-context';
import classes from './ColorPeg.module.css';

const ColorPeg = (props) => {
    const [isSelected, setIsSelected] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);

    const gameCtx = useContext(GameContext);
    const { selectedColor } = gameCtx; 

    const selectColorClasses = `${classes[props.color]} ${classes.pegs} ${isSelected ? classes.selectedPeg : ''}`;

    const onSelectColorHandler = (e) => {
        e.preventDefault();
        
        if (gameCtx.status !== undefined){
            gameCtx.addGame({
                ...gameCtx,
                selectedColor: props.color
            })
        }
    }

    useEffect(() => {
        if (gameCtx.status !== undefined){
            if (selectedColor !== props.color){
                setIsSelected(false);
            }
            else {
                setIsSelected(true);
            }
        }
    }, [selectedColor])

    return (
        <li key={props.id} className={selectColorClasses} onClick={onSelectColorHandler}>
            
        </li>
    )
}

export default ColorPeg
