import {
  ADD_SCHEDULE_SET_VALUE,
  ADD_SCHEDULE_OPEN_DIALOG,
  ADD_SCHEDULE_CLOSE_DIALOG,
  ADD_SCHEDULE_START_EDIT,
} from './actions';
import dayjs from 'dayjs';

export interface AddScheduleState {
  form: {
    title: string;
    description: string;
    date: dayjs.Dayjs;
    location: string;
  };
  isDialogOpen: boolean;
  isStartEdit: boolean;
}

const initialState = {
  form: {
    title: '',
    description: '',
    date: dayjs(),
    location: '',
  },
  isDialogOpen: false,
  isStartEdit: false,
};

export const addScheduleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_SCHEDULE_SET_VALUE:
      return { ...state, form: { ...state.form, ...payload } };
    case ADD_SCHEDULE_OPEN_DIALOG:
      return { ...state, isDialogOpen: true };
    case ADD_SCHEDULE_CLOSE_DIALOG:
      return initialState;
    case ADD_SCHEDULE_START_EDIT:
      return { ...state, isStartEdit: true };
    default:
      return state;
  }
};