import { connect } from "react-redux";

import Navigation from "./presentation";
import {
  formatMonth,
  getMonth,
  getNextMonth,
  getPreviousMonth,
} from "../../services/calender";
import { calenderSetMonth } from "../../redux/calender/actions";
import { asyncScheduleFetchItem } from "../../redux/schedules/effects";

const mapStateToProps = (state) => ({ calender: state.calender });

const mapDispatchToProps = (dispatch) => ({
  setMonth: (month) => {
    dispatch(calenderSetMonth(month));
  },
  fetchItem: (month) => {
    dispatch(asyncScheduleFetchItem(month));
  },
});

const mergeProps = (stateProps, dispatchProps) => ({
  month: getMonth(stateProps.calender),
  setNextMonth: () => {
    const nextMonth = getNextMonth(stateProps.calender);
    dispatchProps.setMonth(nextMonth);
    dispatchProps.fetchItem(nextMonth);
  },
  setPreviousMonth: () => {
    const previousMonth = getPreviousMonth(stateProps.calender);
    dispatchProps.setMonth(previousMonth);
    dispatchProps.fetchItem(previousMonth);
  },
  setMonth: (dayObj) => {
    const month = formatMonth(dayObj);
    dispatchProps.setMonth(month);
    dispatchProps.fetchItem(month);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Navigation);
