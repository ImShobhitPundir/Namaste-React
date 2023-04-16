import React from "react";
import ReactDOM from "react-dom/client";

// Reach Element
const heading = <h1> This is React Element</h1>;

// React Component
const Heading = () => {
  return <h1> This is main heading.</h1>;
};

/*
const HeadingComponent = () => {
    return <h1> This is my Component </h1>
}
*/
// const HeadingComponent = () => <h1> This is my Component </h1>

const HeadingComponent = () => (
  // <React.Fragment>
  <>
    <div className="head">
      <Heading />
      <Heading> </Heading>
      {Heading()}
      <h1> This is my functional Component </h1>
    </div>
    <div className="head">
        {heading}
      <h1> This is Second Div</h1>
    </div>
  </>
);

// console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
