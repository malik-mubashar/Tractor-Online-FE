import React from "react";
import ReactDOM from "react-dom";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/scss/bootstrap.scss";
import AppRouter from "./routes/AppRouter";
import RootContext from "./context/RootContext";



ReactDOM.render(
  <RootContext>
		<BrowserRouter basename="/">
      <AppRouter />
    </BrowserRouter>
  </RootContext>,document.querySelector("#root")
);
