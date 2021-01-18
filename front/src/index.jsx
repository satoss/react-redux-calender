import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import CalenderBoard from "./components/CalenderBoard/container";
import Navigation from "./components/Navigation/container";
import rootReducer from "./redux/rootReducer";

dayjs.locale("ja");

const store = createStore(
  rootReducer,
  compose(
    process.env.NODE_ENV === "development" && window.devToolsExtension
      ? window.devToolsExtension()
      : (f) => f
  )
);

const App = () => (
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <Navigation />
      <CalenderBoard />
    </MuiPickersUtilsProvider>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
