import React, { useEffect, useState } from "react";

const CounterEffect = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  useEffect(() => {
    document.title = `Incremented to ${count}`;
  }, [count]);

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default CounterEffect;
