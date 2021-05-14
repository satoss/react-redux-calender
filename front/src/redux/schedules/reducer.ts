import {
  SCHEDULE_ADD_ITEM,
  SCHEDULE_FETCH_ITEM,
  SCHEDULE_SET_LOADING,
  SCHEDULE_DELETE_ITEM,
  SCHEDULE_ASYNC_FAILURE,
  SCHEDULE_RESET_ERROR,
} from './actions';

export interface SchedulesState {
  items: {
    id: number;
    date: string;
    title: string;
    description: string;
    location: string;
  }[];
  isLoading: boolean;
  error: string;
}

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const schedulesReducer = (
  state = initialState,
  { type, payload, error }
) => {
  switch (type) {
    case SCHEDULE_ADD_ITEM:
      return {
        ...state,
        items: [...state.items, payload],
      };
    case SCHEDULE_SET_LOADING:
      return { ...state, isLoading: true };
    case SCHEDULE_FETCH_ITEM:
      return {
        ...state,
        isLoading: false,
        items: payload,
      };
    case SCHEDULE_DELETE_ITEM:
      return {
        ...state,
        isLoading: false,
        items: payload,
      };
    case SCHEDULE_ASYNC_FAILURE:
      return { ...state, error };
    case SCHEDULE_RESET_ERROR:
      return { ...state, error: null };
    default:
      return state;
  }
};
