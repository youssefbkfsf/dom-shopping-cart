import React, { useState } from 'react';

const ClickCounter = () => {
  // useState hook to track the number of clicks
  const [clickCount, setClickCount] = useState(0);

  // Function to handle click events
  const handleClick = () => {
    // Increment the click count
    setClickCount(clickCount + 1);
  };

  return (
    <div>
      <h2>Click Counter</h2>
      <p>Number of clicks: {clickCount}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default ClickCounter;
