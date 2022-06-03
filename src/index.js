import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/scss/bootstrap.scss";
import AppRouter from "./routes/AppRouter";
import RootContext from "./context/RootContext";

ReactDOM.render(
  <RootContext>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </RootContext>,document.querySelector("#root")
);
