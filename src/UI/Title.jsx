import React from 'react';
import GameReference from './GameReference';

import classes from './Title.module.css';

const Title = () => {

    return (
        <div className={classes.titleWrapper}>
            <h1>Mastermind</h1>
            <GameReference />
        </div>
    )
    
}

export default Title
