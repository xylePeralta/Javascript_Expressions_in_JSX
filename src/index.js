import React from "react";
import ReactDOM from "react-dom";

const name = "Xyle Peralta";
const year = new Date().getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
