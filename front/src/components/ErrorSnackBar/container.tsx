import { connect } from "react-redux";
import ErrorSnackBar from "./presentation";
import { scheduleResetError } from "../../redux/schedules/actions";

const mapStateToProps = (state) => ({
  error: state.schedules.error,
});

const mapDispatchToProps = (dispatch) => ({
  handleClose: () => {
    dispatch(scheduleResetError());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorSnackBar);
