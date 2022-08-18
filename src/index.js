import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// ReactDOM.createRoot(<App />, document.getElementById("root"));
const root = createRoot(document.getElementById("root"));
root.render(<App />);
