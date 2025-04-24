import React from "react";

const ComponentOne = ({ count, onClickHandler }) => {
  function handleClick() {
    onClickHandler();
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default ComponentOne;
