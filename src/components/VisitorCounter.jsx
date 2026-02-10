// Statement: Track number of visitors.
// Use: useState
// Behavior:

// ○ increases count
// ● − decreases count
// ● Count never below 0
// ● At 10 show “Daily visitor limit reached”
// Example: count=10 → message shown

import React, { useState } from 'react'

function VisitorCounter() {
    const [Count, setCount] = useState(0);
    function Increse (){
        setCount(Count+1)
    };
    function Decrese (){
        
        setCount(Count-1)
    }
     function Reset (){
        setCount(0)
    }

  return (
    <div>
        <h1>This is count</h1>
        <h1>{Count}</h1>
        <div>
            <button onClick={Increse}>Increse</button>
            <button onClick={Decrese}>Decrese</button>
            <button onClick={Reset}>Reset</button>
        </div>
        
    </div>
  )
}

export default VisitorCounter