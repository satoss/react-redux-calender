import React from "react";
import { GridList, Typography } from "@material-ui/core";

// import { createCalender } from "../../services/calender";
import CalenderElement from "../CalenderElement";
import * as styles from "./style.css";

// const calender = createCalender();
const days = ["日", "月", "火", "水", "木", "金", "土"];

const CalenderBoard = ({ calender }) => {
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
        {calender.map((c, i) => (
          <li key={c.toISOString()}>
            <CalenderElement day={c} />
          </li>
        ))}
      </GridList>
    </div>
  );
};

export default CalenderBoard;