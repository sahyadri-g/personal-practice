// Statement: Toggle password visibility.
// Use: useState
// Behavior:
// ● Show or hide password
// Example: toggle → visible/hidden

import React from 'react'

function ShowPassword() {
  return (
    <div>
        <h1>password</h1>
        <input type='passwod' placeholder='Password' ></input><button>Show</button>
    </div>
  )
}

export default ShowPassword