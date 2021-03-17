import React from "react";
import { render } from "react-dom";
import "normalize.css";
import { GlobalStyles } from "./Global-Styles";
import App from "./App";

render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("root")
);
