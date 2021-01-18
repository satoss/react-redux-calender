import { connect } from "react-redux";

import Navigation from "./presentation";
import { getNextMonth, getPreviousMonth } from "../../services/calender";
import { calenderSetMonth } from "../../redux/calender/actions";

const mapStateToProps = (state) => ({ calender: state.calender });

const mapDispatchToProps = (dispatch) => ({
  setMonth: (month) => {
    dispatch(calenderSetMonth(month));
  },
});

const mergeProps = (stateProps, dispatchProps) => ({
  setNextMonth: () => {
    const nextMonth = getNextMonth(stateProps.calender);
    dispatchProps.setMonth(nextMonth);
  },
  setPreviousMonth: () => {
    const previousMonth = getPreviousMonth(stateProps.calender);
    dispatchProps.setMonth(previousMonth);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Navigation);
