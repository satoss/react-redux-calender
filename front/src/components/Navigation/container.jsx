import { connect } from "react-redux";

import Navigation from "./presentation";
import {
  formatMonth,
  getMonth,
  getNextMonth,
  getPreviousMonth,
} from "../../services/calender";
import { calenderSetMonth } from "../../redux/calender/actions";

const mapStateToProps = (state) => ({ calender: state.calender });

const mapDispatchToProps = (dispatch) => ({
  setMonth: (month) => {
    dispatch(calenderSetMonth(month));
  },
});

const mergeProps = (stateProps, dispatchProps) => ({
  month: getMonth(stateProps.calender),
  setNextMonth: () => {
    const nextMonth = getNextMonth(stateProps.calender);
    dispatchProps.setMonth(nextMonth);
  },
  setPreviousMonth: () => {
    const previousMonth = getPreviousMonth(stateProps.calender);
    dispatchProps.setMonth(previousMonth);
  },
  setMonth: (dayObj) => {
    const month = formatMonth(dayObj);
    dispatchProps.setMonth(month);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Navigation);
