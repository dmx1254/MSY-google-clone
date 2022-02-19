import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import "./global.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ResultContextProvider } from "./components/contexts/ResultContextProvider";

ReactDom.render(
  <ResultContextProvider>
    <Router>
      <App />
    </Router>
  </ResultContextProvider>,
  document.getElementById("root")
);
