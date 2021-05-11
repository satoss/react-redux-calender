import React from 'react';

import * as styles from './style.css';

interface ScheduleProps {
  schedule?: any;
  onClickSchedule?: any;
}

const Schedule = ({ schedule, onClickSchedule }: ScheduleProps) => {
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
