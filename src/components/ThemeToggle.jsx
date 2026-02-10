// Statement: Toggle app theme.
// Use: useState
// Behavior:
// ● Switch between Light and Dark
// Example: click → Dark Mode

import React from "react";
import { useState } from "react";

function ThemeToggle() {
  const [Mode, setMode] = useState(false);

  const toggleHandler = () => {
    setMode(!Mode);
  };

  return (
    <div>
      <h1>Switch between Light and Dark</h1>
      {Mode ? (
        <button onClick={toggleHandler}>Light Mode</button>
      ) : (
        <button onClick={toggleHandler}>Dark Mode</button>
      )}
    </div>
  );
}

export default ThemeToggle;
