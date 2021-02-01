import React from "react";
import { Typography } from "@material-ui/core";

import * as styles from "./style.css";
import dayjs from "dayjs";
import {
  isSameDay,
  isSameMonth,
  isFirstDay,
  getMonth,
} from "../../services/calender";
import Schedule from "../Schedule";

const CalenderElement = ({ day, month, schedules }) => {
  const today = dayjs();
  const isToday = isSameDay(day, today);

  const currentMonth = getMonth(month);
  const textColor = isSameMonth(day, currentMonth)
    ? "textPrimary"
    : "textSecondary";

  const format = isFirstDay(day) ? "M月D日" : "D";

  return (
    <div className={styles.element}>
      <Typography
        className={styles.date}
        color={textColor}
        align="center"
        variant="caption"
        component="div"
      >
        <span className={isToday ? styles.today : ""}>
          {day.format(format)}
        </span>
      </Typography>
      <div className={styles.schedules}>
        {schedules.map((e) => (
          <Schedule key={e.id} schedule={e} />
        ))}
      </div>
    </div>
  );
};

export default CalenderElement;
