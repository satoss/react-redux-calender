import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import CalenderBoard from "./components/CalenderBoard/container";
import Navigation from "./components/Navigation/container";
import rootReducer from "./redux/rootReducer";

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <Navigation />
    <CalenderBoard />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
