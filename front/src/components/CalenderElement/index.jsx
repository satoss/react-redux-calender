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

const CalenderElement = ({ day, month }) => {
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
    </div>
  );
};

export default CalenderElement;
