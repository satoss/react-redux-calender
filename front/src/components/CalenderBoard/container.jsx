import { connect } from "react-redux";

import { createCalender } from "../../services/calender";
import CalenderBoard from "./presentation";

import {
  addScheduleOpenDialog,
  addScheduleSetValue,
} from "../../redux/addSchedule/actions";

const mapStateToProps = (state) => ({ calender: state.calender });

const mapDispatchToProps = (dispatch) => ({
  openAddScheduleDialog: (d) => {
    dispatch(addScheduleOpenDialog());
    dispatch(addScheduleSetValue({ date: d }));
  },
});

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  month: stateProps.calender,
  calender: createCalender(stateProps.calender),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(CalenderBoard);
