import React from "react";

export default ({ favor, topping }) => {
  const isFavour = favor === topping;

  return (
    isFavour
      ? <h3 className="selected">{ topping }</h3>
      : <h3>{ topping }</h3>
  )
}
