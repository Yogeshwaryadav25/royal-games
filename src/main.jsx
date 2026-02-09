import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/main.css";
import {  HashRouter } from "react-router-dom";
import { StoreProvider } from "./context/StoreContext";




ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
  <StoreProvider>
    <App />
    </StoreProvider>
  </HashRouter>
);

