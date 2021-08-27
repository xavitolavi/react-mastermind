import React, { useContext, useEffect, useState } from 'react';
import GameContext from '../../context/game-context';
import GuessPeg from './GuessPeg';

import classes from './GuessPegList.module.css'

const GuessPegList = (props) => {
    const [code, setCode] = useState([]);
    const pegs = [
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
    ]
    const gameCtx = useContext(GameContext);

    const addColorToArray = (id, colorPeg) => {
        const newArray = [...code];
        newArray.splice(id-1, 1, colorPeg);
        setCode(newArray);
    }

    useEffect(()=>{
        gameCtx.addGame({
            ...gameCtx,
            code: code
        })
    }, [code])

    const slots = pegs.map(peg => (<GuessPeg key={peg.id} peg={peg} row={props.row} onChangeColor={addColorToArray}/>));
    return (
        <div className={classes.pegSlots}>
            {slots}
        </div>
    )
}

export default GuessPegList
