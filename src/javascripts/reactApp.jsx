import ReactDom from "react-dom";
import * as React from "react";

import Alert from "./alert.tsx";

const App = (props) => {
  return (
    <div style={{ color: "black" }}>
      Hello ,React App!
      <Alert message="Success" />
    </div>
  );
};

const reactRoot = document.getElementById("react-root");
if (reactRoot) {
  ReactDom.render(<App />, reactRoot);
} else {
  console.log("No root element found");
}
