// Statement: Validate username input.
// Use: useState
// Behavior:
// ● Min 4 chars
// ● No spaces
// Example: &quot;ab&quot; → Too short

import React from "react";
import { useState } from "react";

function UsernameValidator() {
  const [username, setUsername] = useState("");


  const userHandeler = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div>
      <h1>Input Handeling</h1>
      <input type="text" value = {username} onChange={userHandeler} />
      {username.length < 4 && <p>username is too short</p>}
    </div>
  );
}

export default UsernameValidator;
