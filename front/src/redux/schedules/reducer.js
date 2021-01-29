import { SCHEDULE_ADD_ITEM } from "./actions";

const initialState = {
  items: [],
  isLoading: false,
};

const schedulesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SCHEDULE_ADD_ITEM:
      return {
        ...state,
        items: [...state.items, { ...payload, id: state.items.length + 1 }],
      };
    default:
      return state;
  }
};

export default schedulesReducer;
