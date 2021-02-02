import { connect } from "react-redux";

import { createCalender } from "../../services/calender";
import CalenderBoard from "./presentation";
import { setSchedules } from "../../services/schedule";
import { asyncScheduleFetchItem } from "../../redux/schedules/effects";

import {
  addScheduleOpenDialog,
  addScheduleSetValue,
} from "../../redux/addSchedule/actions";

import {
  currentScheduleSetItem,
  currentScheduleOpenDialog,
} from "../../redux/currentSchedule/actions";

const mapStateToProps = (state) => ({
  calender: state.calender,
  schedules: state.schedules,
});

const mapDispatchToProps = (dispatch) => ({
  openAddScheduleDialog: (d) => {
    dispatch(addScheduleOpenDialog());
    dispatch(addScheduleSetValue({ date: d }));
  },
  openCurrentScheduleDialog: (schedule, e) => {
    e.stopPropagation();
    dispatch(currentScheduleSetItem(schedule));
    dispatch(currentScheduleOpenDialog());
  },
  fetchSchedule: (month) => {
    dispatch(asyncScheduleFetchItem(month));
  },
});

const mergeProps = (stateProps, dispatchProps) => {
  const {
    calender: month,
    schedules: { items: schedules },
  } = stateProps;

  const calender = setSchedules(createCalender(month), schedules);

  return {
    ...stateProps,
    ...dispatchProps,
    calender,
    month,
    fetchSchedule: () => dispatchProps.fetchSchedule(month),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(CalenderBoard);
