import React, { useState } from "react";

function Counter() {
  // Step 1: Initialize state with useState
  const [count, setCount] = useState(0);

  // Step 2: Function to increment count
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {/* Step 3: Display count */}
      <h3>{count}</h3>

      {/* Step 4: Button to update count */}
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;