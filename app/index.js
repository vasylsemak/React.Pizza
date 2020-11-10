import React from "react";
import ReactDOM  from "react-dom";
import Pizza from "../modules/Pizza.js"

const Main = () => {
  return <Pizza />
}

ReactDOM.render(<Main/>, document.getElementById("app"));
