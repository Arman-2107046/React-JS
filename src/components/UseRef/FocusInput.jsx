import React, { useRef } from "react";

const FocusInput = () => {
  const inputElement = useRef();

  function focusInput() {
    inputElement.current.focus();
    inputElement.current.value = "Arman Rahman Rafi";
  }

  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Write My Name</button>
    </div>
  );
};

export default FocusInput;
