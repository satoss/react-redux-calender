import React from 'react'
import {Typography} from '@material-ui/core'

import * as styles from './style.css'

const CalenderElement = ({day}) => {

    const isFirstDay = day.date() === 1;
    const format = isFirstDay ? 'M月D日' : 'D';

    return (
        <div className={styles.element}>
            <Typography
                className={styles.date}
                align='center'
                variant='caption'
                component='div'
            >
                {day.format(format)}
            </Typography>
        </div>
    )
}


export default CalenderElement;