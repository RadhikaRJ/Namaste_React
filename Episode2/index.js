import React from "react";
import ReactDOM from "react-dom/client";

// const headingfromReact = React.createElement(
//   "h1",
//   { id: "heading" }, //attributes to tag can be given here id ="heading", xyz = "abc"
//   "Hello World from React! 🚀"
// );

//Episode 3
const jsxHeading = <h1>Hello World from JSX🚀</h1>;
const root_react = ReactDOM.createRoot(document.getElementById("root"));
//root_react.render(headingfromReact);
root_react.render(jsxHeading);
