import React, { useEffect } from "react";

const BasicEffect = () => {
  useEffect(() => {
    console.log("Rendeerd for the first time");
  }, []);
  return <div>BasicEffect</div>;
};

export default BasicEffect;
