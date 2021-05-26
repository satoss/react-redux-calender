import dayjs from 'dayjs';

import { CALENDER_SET_MONTH } from './actions';
import { formatMonth } from '../../services/calender';

export interface CalenderState {
  month: number;
  year: number;
}

const initialState = formatMonth(dayjs());

export const calenderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CALENDER_SET_MONTH:
      return payload;
    default:
      return state;
  }
};
