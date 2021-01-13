import React from 'react'
import { GridList } from '@material-ui/core'

import { createCalender } from '../../services/calender'
import CalenderElement from '../CalenderElement'
import * as styles from './style.css'

const calender = createCalender();

const CalenderBoard = () => {
    return (
        <div className={styles.container}>
            <GridList className={styles.grid} cols={8} spacing={0} cellHeight='auto'>
            {calender.map((c, i) => (
                <li key={c.toISOString()}>
                    <CalenderElement>{c.format('D')}</CalenderElement>
                </li>
            ))}
            </GridList>
        </div>
    )
}

export default CalenderBoard;