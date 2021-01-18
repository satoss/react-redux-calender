import dayjs from "dayjs";

import { CALENDER_SET_MONTH } from "./actions";
import { formatMonth } from "../../services/calender";

const initialState = formatMonth(dayjs());

const calenderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CALENDER_SET_MONTH:
      return payload;
    default:
      return state;
  }
};

export default calenderReducer;
