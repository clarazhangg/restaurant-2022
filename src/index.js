import React from "react";
// import creatRoot from "react-dom";

// import App from "./App";

// creatRoot.render(<App />, document.getElementById("root"));
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <div>
    <App />
  </div>
);
