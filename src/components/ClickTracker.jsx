// Statement: Track button clicks.
// Use: useState
// Behavior:
// ● Each click increases count
// Example: clicked 3 times → Clicks: 3

import React from 'react'
import { useState } from 'react';

function ClickTracker() {
    const [Count, setCount] = useState(0);
    const countSetter = () => {
        setCount(Count+1);
    }
  return (
    <div>
        <h1>Click Tracket</h1>
        <h2>Click = {Count}</h2>
        <button onClick={countSetter}>Click</button>
    </div>
  )
}

export default ClickTracker