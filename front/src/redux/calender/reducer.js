import dayjs from "dayjs";

import { CALENDER_SET_MONTH } from "./actions";

const day = dayjs();

const initialState = {
  year: day.year(),
  month: day.month() + 1,
};

const calenderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CALENDER_SET_MONTH:
      return payload;
    default:
      return state;
  }
};

export default calenderReducer;
