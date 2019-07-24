import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Firebase, { FirebaseContext } from "./Firebase";
import { ChartJS } from "./components/Chart";

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

// ReactDOM.render(<ChartJS />, document.getElementById("root"));

serviceWorker.unregister();
