import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Head from "./Components/Head"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Head />
    <App />
  </React.StrictMode>
);
