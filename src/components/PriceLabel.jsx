// Statement: Display product price.
// Use: Calculate value from props (no state)
// Behavior:
// ● Input: price
// ● Output: Free or ₹price
// Example: price=0 → Free, price=299 → ₹299

import React from 'react'

function PriceLabel(props) {
    const {price} = props;
    let message = "";
    if(price == 0){
        message = "Product is Free";
    }


  return (
    <div>
        {price ? <h1>The price of product is ₹{price}</h1>:{message}}
    </div>
  )
}

export default PriceLabel;