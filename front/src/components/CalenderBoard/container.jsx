import { connect } from "react-redux";

import { createCalender } from "../../services/calender";
import CalenderBoard from "./presentation";

const mapStateToProps = (state) => ({ calender: state.calender });
const mergeProps = (stateProps) => ({
  calender: createCalender(stateProps.calender),
});

export default connect(mapStateToProps, null, mergeProps)(CalenderBoard);
