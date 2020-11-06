import React, { Fragment } from "react";
import Topping from "./Topping.js"

export default () => {
  return (
    <Fragment>
      <h1>Your favourite pizza toppings are: </h1>
      <ul>
        <li><Topping /></li>
        <li><h3>Pepperoni</h3></li>
        <li><h3>Onion</h3></li>
      </ul>
    </Fragment>
  )
}
