// Statement: Toggle like state.
// Use: useState
// Behavior:
// ● Click toggles liked/unliked
// Example: click → Liked

import React, { useState } from 'react'

function LikeButton() {
    const [State, setState] = useState(false);
    const toggle = ()=>{
        setState(!State);
    }
  return (
    <div>
        <h1>Like the Button !!</h1>
        {State ? <button onClick={toggle}>Unlike</button> : <button onClick={toggle}>Like</button>}
    </div>
  )
}

export default LikeButton