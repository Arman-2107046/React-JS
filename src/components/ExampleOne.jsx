import React from "react";
import { useState } from "react";

const ExampleOne = () => {

  const [count, setCount] = useState(() => {
    const initialCount = 10;
    return initialCount;
  });

  function increment()
  {
    setCount((prevCount)=>{
        return prevCount+1;
    });
  }


  return <div>
    <h1>Count:{count}</h1>
    <button onClick={increment}>Increment</button>
  </div>;
};

export default ExampleOne;
