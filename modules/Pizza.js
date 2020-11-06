import React, { Fragment, Component } from "react";
import Topping from "./Topping.js"

class Pizza extends Component {
  constructor() {
    super()
    this.state = { favTopping: "Mashrooms" }
  }

  render() {
    return (
      <Fragment>
        <h1>Your favourite pizza topping is: {this.state.favTopping}</h1>
        <ul>
          <li><Topping favor={this.state.favTopping} topping="Onions" /></li>
          <li><Topping favor={this.state.favTopping} topping="Mashrooms" /></li>
          <li><Topping favor={this.state.favTopping} topping="Pepperoni" /></li>
        </ul>
      </Fragment>
    )
  }
}

export default Pizza;
