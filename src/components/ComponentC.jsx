import React, { useContext } from "react";
import { Data } from "../App";
import { Data1 } from "../App";

const ComponentC = () => {
  const name = useContext(Data);
  const age = useContext(Data1);

  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
    </div>
  );
};

export default ComponentC;
