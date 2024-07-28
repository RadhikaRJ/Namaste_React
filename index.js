import React from "react";
import ReactDOM from "react-dom/client";

// const headingfromReact = React.createElement(
//   "h1",
//   { id: "heading" }, //attributes to tag can be given here id ="heading", xyz = "abc"
//   "Hello World from React! 🚀"
// );

//Episode 3
const jsxHeading = <h1>Hello World from JSX </h1>;

//root_react.render(headingfromReact);
//root_react.render(jsxHeading);

//Episode 3 React Element and React Components
//A JS function returning JSX is a functional Component

const DisplayInnerText = () => (
  <div>
    <p>This is inner text inside...Component Composition.</p>
  </div>
);

const DisplayText = () => (
  <div>
    <h2>
      Component Composition Display: DisplayInnerText component is rendered
      within DisplayText componen
    </h2>
    <DisplayInnerText />
    <p>Just another statement existing within DisplayText component.</p>
  </div>
);

const root_react = ReactDOM.createRoot(document.getElementById("root"));
root_react.render(<DisplayText />);
