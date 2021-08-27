import React, { useContext, useEffect, useState } from 'react';
import GameContext from '../../context/game-context';
import GuessPeg from './GuessPeg';

import classes from './GuessPegList.module.css'

const GuessPegList = (props) => {
    //Mockup values to avoid bad positioning in the array when adding new colors
    const [code, setCode] = useState(['grey', 'grey', 'grey', 'grey']);
    const pegs = []
    const gameCtx = useContext(GameContext);
    
    for (var i = 0; i<gameCtx.num_slots; i++){
        pegs.push(
            {
                id: i,
                'color': 'grey'
            }
        )
    };

    //Method called when a color is added to a peg, it adds the color in the code array replacing a grey peg in it's position
    const addColorToArray = (id, colorPeg) => {
        const newArray = [...code];
        newArray.splice(id, 1, colorPeg);
        setCode(newArray);
    }

    useEffect(()=>{
        gameCtx.addGame({
            ...gameCtx,
            code: code
        })
    }, [code])

    //UseEffect to remove the colors in the code when clicking the Reset button
    useEffect(() => {
        if (props.row === gameCtx.guesses.length) {
            //We 'reset' the code adding the mockup values again
            setCode(['grey', 'grey', 'grey', 'grey'])
        }
    }, [gameCtx.reset])
    

    const slots = pegs.map(peg => (<GuessPeg key={peg.id} peg={peg} row={props.row} onChangeColor={addColorToArray}/>));

    return (
        <div className={classes.pegSlots}>
            {slots}
        </div>
    )
}

export default GuessPegList
