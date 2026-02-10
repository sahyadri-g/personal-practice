// Statement: Toggle password visibility.
// Use: useState
// Behavior:
// ● Show or hide password
// Example: toggle → visible/hidden

import React, { useState } from 'react'

function ShowPassword() {
    const [showPassword, setShowPassword] = useState(false);

    const showOrHidePassword = () => {
        setShowPassword(!showPassword);
        // setShowPassword((prevState) => !prevState);
        
    };

  return (
    <div>
        <h1>password</h1>
        <input type={showPassword ? 'text' : 'password'} />
        <button onClick={showOrHidePassword} >{showPassword ? 'Hide' : "Show"}</button>
    </div>
  )
}

export default ShowPassword