import React, { useState, useEffect } from "react";

const NotHome = () => {
    // State to track the counter value
    const [count, setCount] = useState(0);
  
    // Function to increment the counter
    const increaseCount = () => {
      setCount(count + 1);
    };
  
    // Function to decrement the counter
    const decreaseCount = () => {
      setCount(count - 1);
    };
  
    // useEffect Hook to watch counter changes
    useEffect(() => {
      if (count < 0) {
        setCount(0); // Reset to zero if below 0
      }
      if (count > 5) {
        alert("You passed 5!"); // Show an alert when count exceeds 5
      }
    }, [count]); // Runs every time `count` changes
  
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>NotHome Page</h2>
        <h3>Counter: {count}</h3>
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
      </div>
    );
  };
  
  export default NotHome;