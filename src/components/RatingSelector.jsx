// Statement: Select product rating.
// Use: useState
// Behavior:
// ● Input: rating 1–5
// ● Output: highlight selected rating
// Example: rating=4 → Rating: 4

import React from "react";
import { useState } from "react";

function RatingSelector() {
  const [Rating, setRating] = useState(0);

  const rating = (value) => {
    setRating(value);

  };
  

  return (
    <div>
      <h1>Rating</h1>
      <div>
        <button onClick={rating}>1</button>
        <button onClick={rating}>2</button>
        <button onClick={rating}>3</button>
        <button onClick={rating}>4</button>
        <button onClick={rating}>5</button>
      </div>
      
    </div>
  );
}

export default RatingSelector;
