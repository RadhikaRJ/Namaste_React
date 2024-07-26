import React from "react";
import ReactDOM from "react-dom/client";

const headingfromReact = React.createElement(
  "h1",
  { id: "heading" }, //attributes to tag can be given here id ="heading", xyz = "abc"
  "Hello World from React! 🚀"
);
const root_react = ReactDOM.createRoot(document.getElementById("root"));
root_react.render(headingfromReact);
