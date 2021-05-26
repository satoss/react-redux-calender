import { connect } from 'react-redux';

import AddScheduleDialog from './presentation';

import {
  addScheduleCloseDialog,
  addScheduleSetValue,
  addScheduleStartEdit,
  //@ts-ignore
} from '../../redux/addSchedule/actions';
//@ts-ignore
import { isCloseDialog } from '../../services/schedule';
//@ts-ignore
import { asyncScheduleAddItem } from '../../redux/schedules/effects';

const mapStateToProps = (state) => ({ schedule: state.addSchedule });

const mapDispatchToProps = (dispatch) => ({
  closeDialog: () => {
    dispatch(addScheduleCloseDialog());
  },
  setSchedule: (value) => {
    dispatch(addScheduleSetValue(value));
  },
  saveSchedule: (schedule) => {
    dispatch(asyncScheduleAddItem(schedule));
    dispatch(addScheduleCloseDialog());
  },
  setIsEditStart: () => {
    dispatch(addScheduleStartEdit());
  },
});

const mergeProps = (stateProps, dispatchProps) => {
  const {
    schedule: { form: schedule },
  } = stateProps;
  const { closeDialog, saveSchedule } = dispatchProps;
  return {
    ...stateProps,
    ...dispatchProps,
    saveSchedule: () => {
      saveSchedule(schedule);
    },
    closeDialog: () => {
      if (isCloseDialog(schedule)) {
        closeDialog();
      }
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(AddScheduleDialog);
