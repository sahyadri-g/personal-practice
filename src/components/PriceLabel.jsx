// Statement: Display product price.
// Use: Calculate value from props (no state)
// Behavior:
// ● Input: price
// ● Output: Free or ₹price
// Example: price=0 → Free, price=299 → ₹299

import React from 'react'

function PriceLabel(props) {
    const {price} = props;

    if(price == 0){
        return "Product is Free";
    }


  return (
    <div>
        <h1>The price of product is ₹{price}</h1>
    </div>
  )
}

export default PriceLabel;