// import React from "react";

// const reactElement=<div id="outer">
//   <div id="inner">
//     <div id="spam-container">
//       <span>Spam 1</span>
//       <span>Spam 2</span>
//       <span>Spam 3</span>
//     </div>
//   </div>
// </div>; 

React.createElement(
  div,
  { id: "outer" },
  React.createElement(
    div,
    { id: "inner" },
    React.createElement(div, { id: "spam-container" }, [
      React.createElement("span", {}, "Spam 1"),
      React.createElement("span", {}, "Spam 2"),
      React.createElement("span", {}, "Spam 3"),
    ])
  )
);

