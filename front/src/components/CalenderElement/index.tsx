import React from 'react';
import { Typography } from '@material-ui/core';

import * as styles from './style.css';
import dayjs from 'dayjs';
import {
  isSameDay,
  isSameMonth,
  isFirstDay,
  getMonth,
} from '../../services/calender';
import Schedule from '../Schedule';

interface CalenderElementProps {
  day: dayjs.Dayjs;
  month: { year: number; month: number };
  schedules: {
    id: number;
    title: string;
    description: string;
    location: string;
    date: dayjs.Dayjs;
  }[];
  onClickSchedule: Function;
}

const CalenderElement: React.FC<CalenderElementProps> = ({
  day,
  month,
  schedules,
  ...props
}) => {
  const today = dayjs();
  const isToday = isSameDay(day, today);

  const currentMonth = getMonth(month);
  const SameMonth = isSameMonth(day, currentMonth);
  const textColor = isSameMonth ? 'textPrimary' : 'textSecondary';

  const format = isFirstDay(day) && !SameMonth ? 'M月D日' : 'D';

  return (
    <div className={styles.element}>
      <Typography
        className={styles.date}
        color={textColor}
        align="center"
        variant="caption"
        component="div"
      >
        <span className={isToday ? styles.today : ''}>
          {day.format(format)}
        </span>
      </Typography>
      <div className={styles.schedules}>
        {schedules.map((e) => (
          <Schedule key={e.id} schedule={e} {...props} />
        ))}
      </div>
    </div>
  );
};

export default CalenderElement;
