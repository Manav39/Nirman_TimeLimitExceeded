import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./global.css";
import { MeddyProvider } from "./context/context";

const container = document.getElementById("root");
const root = createRoot(container);
const app_id = 123;
root.render(
  <MeddyProvider>
    {/* <PatientProvider> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </PatientProvider> */}
  </MeddyProvider>
);
