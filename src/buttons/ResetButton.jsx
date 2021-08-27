import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo } from '@fortawesome/free-solid-svg-icons'

import classes from './ResetButton.module.css'

const ResetButton = () => {

    const resetRowHandler = () => {

    }

    return (
        <button onClick={resetRowHandler}>
            <FontAwesomeIcon className={classes.icon} icon={faRedo} />
        </button>
    )
}

export default ResetButton
