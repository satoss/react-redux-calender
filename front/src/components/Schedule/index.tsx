import dayjs from 'dayjs';
import React from 'react';

import * as styles from './style.css';

interface ScheduleProps {
  schedule: {
    id: number;
    title: string;
    description: string;
    location: string;
    date: dayjs.Dayjs;
  };
  onClickSchedule: any;
}

const Schedule: React.FC<ScheduleProps> = ({
  schedule,
  onClickSchedule,
}: ScheduleProps) => {
  return (
    <div
      className={styles.schedule}
      onClick={(e) => onClickSchedule(schedule, e)}
    >
      {schedule.title}
    </div>
  );
};

export default Schedule;
