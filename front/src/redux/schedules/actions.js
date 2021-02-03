export const SCHEDULE_ADD_ITEM = "SCHEDULE_ADD_ITEM";
export const SCHEDULE_FETCH_ITEM = "SCHEDULE_FETCH_ITEM";
export const SCHEDULE_SET_LOADING = "SCHEDULE_SET_LOADING";
export const SCHEDULE_DELETE_ITEM = "SCHEDULE_DELETE_ITEM";
export const SCHEDULE_ASYNC_FAILURE = "SCHEDULE_ASYNC_FAILURE";
export const SCHEDULE_RESET_ERROR = "SCHEDULE_RESET_ERROR";

export const scheduleAddItem = (payload) => ({
  type: SCHEDULE_ADD_ITEM,
  payload,
});

export const scheduleFetchItem = (payload) => ({
  type: SCHEDULE_FETCH_ITEM,
  payload,
});

export const scheduleSetLoading = () => ({
  type: SCHEDULE_SET_LOADING,
});

export const scheduleDeleteItem = (payload) => ({
  type: SCHEDULE_DELETE_ITEM,
  payload,
});

export const scheduleAsyncFailure = (error) => ({
  type: SCHEDULE_ASYNC_FAILURE,
  error,
});

export const scheduleResetError = () => ({
  type: SCHEDULE_RESET_ERROR,
});
