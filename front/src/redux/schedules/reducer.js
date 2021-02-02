import {
  SCHEDULE_ADD_ITEM,
  SCHEDULE_FETCH_ITEM,
  SCHEDULE_SET_LOADING,
  SCHEDULE_DELETE_ITEM,
} from "./actions";

const initialState = {
  items: [],
  isLoading: false,
};

const schedulesReducer = (state = initialState, { type, payload }) => {
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
    default:
      return state;
  }
};

export default schedulesReducer;
