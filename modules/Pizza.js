import React, { Fragment, Component } from "react";
import Topping from "./Topping.js"

class Pizza extends Component {
  constructor() {
    super()
    this.state = { favTopping: "Mashrooms" }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    let clickedText = event.target.innerText;
    this.setState(()=> ({ favTopping: clickedText }));
  }

  render() {
    return (
      <Fragment>
        <h1>Your favourite pizza topping is: {this.state.favTopping}</h1>
        <div onClick={this.handleClick}>
          <ul>
            <li><Topping favor={this.state.favTopping} topping="Onions" /></li>
            <li><Topping favor={this.state.favTopping} topping="Mashrooms" /></li>
            <li><Topping favor={this.state.favTopping} topping="Pepperoni" /></li>
          </ul>
        </div>
      </Fragment>
    )
  }
}

export default Pizza;
