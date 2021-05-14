import dayjs from 'dayjs';
import {
  CURRENT_SCHEDULE_SET_ITEM,
  CURRENT_SCHEDULE_OPEN_DIALOG,
  CURRENT_SCHEDULE_CLOSE_DIALOG,
} from './actions';

export interface currentScheduleState {
  item: {
    id: number;
    date: dayjs.Dayjs;
    title: string;
    description: string;
    location: string;
  };
  isDialogOpen: boolean;
}

const initialState = {
  item: null,
  isDialogOpen: false,
};

export const currentScheduleReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case CURRENT_SCHEDULE_SET_ITEM:
      return { ...state, item: payload };
    case CURRENT_SCHEDULE_OPEN_DIALOG:
      return { ...state, isDialogOpen: true };
    case CURRENT_SCHEDULE_CLOSE_DIALOG:
      return { ...state, isDialogOpen: false };
    default:
      return state;
  }
};
