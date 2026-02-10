// Statement: Show stock availability.
// Use: Calculate value from props (no state)
// Behavior:
// ● Input: quantity
// ● Output: In Stock / Out of Stock
// Example: quantity=0 → Out of Stock

import React from 'react'

function StockStatus(props) {
    const {quantity} = props
    if(quantity == 0){
        return "Out of Stock";
    }
  return (
    <div>
        <h3>In Stock {quantity}</h3>
    </div>
  )
}

export default StockStatus