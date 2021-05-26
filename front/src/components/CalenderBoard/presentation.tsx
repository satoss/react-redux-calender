import React, { useEffect } from 'react';
import { GridList, Typography } from '@material-ui/core';

import CalenderElement from '../CalenderElement';
import * as styles from './style.css';
import dayjs from 'dayjs';

const days = ['日', '月', '火', '水', '木', '金', '土'];

interface CalenderBoardProps {
  calender?: {
    date: dayjs.Dayjs;
    schedules: {
      id: number;
      title: string;
      description: string;
      location: string;
      date: dayjs.Dayjs;
    }[];
  }[];
  month?: { month: number; year: number };
  openAddScheduleDialog?: Function;
  openCurrentScheduleDialog?: (
    event: React.MouseEvent<HTMLInputElement>
  ) => void;
  fetchSchedule?: Function;
}

const CalenderBoard: React.FC<CalenderBoardProps> = ({
  calender,
  month,
  openAddScheduleDialog,
  openCurrentScheduleDialog,
  fetchSchedule,
}) => {
  useEffect(() => {
    fetchSchedule(month);
  }, []);
  return (
    <div className={styles.container}>
      <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
        {days.map((d) => (
          <li key={d}>
            <Typography
              className={styles.days}
              color="textSecondary"
              align="center"
              variant="caption"
              component="div"
            >
              {d}
            </Typography>
          </li>
        ))}
        {calender.map(({ date, schedules }) => (
          <li
            key={date.toISOString()}
            onClick={() => openAddScheduleDialog(date)}
          >
            <CalenderElement
              day={date}
              month={month}
              schedules={schedules}
              onClickSchedule={openCurrentScheduleDialog}
            />
          </li>
        ))}
      </GridList>
    </div>
  );
};

export default CalenderBoard;
