import React, { useState, useEffect } from 'react';
import './counter.css'

function Counter(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < props.number) {
      const timeout = setTimeout(() => {
        setCount(count + 1);
      }, 10);
      return () => clearTimeout(timeout);
    }
  }, [count]);

  return (
    <div className="counter ">
        <p>{props.text}</p>
      <span className="count">{count}</span>
    </div>
  );
}

export default Counter;