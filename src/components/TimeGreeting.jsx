// Statement: Show greeting based on current hour.
// Use: Calculate value from props (no state)
// Behavior:
// ● Input: hour
// ● Output: greeting text
// Example: hour=9 → Good Morning

import React from 'react'

function TimeGreeting(props) {
    const {Hours} = props;
    
    if(0 <= Hours <= 12){
        return "Good Morning";
    }else if(12 <= Hours <= 16){
        return "Good Afternoon";
    }else if(16 <= Hours <= 20){
        return "Good Evening";
    }else if(20 <= Hours){
        return "Good Night";
    }

  return (
    <div>
        <h1>TimeGreeting</h1>
        <h2>Hello !! {Hours}</h2>
    </div>
  )
}

export default TimeGreeting