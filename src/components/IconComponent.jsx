import React from "react";
import { HiOutlineDesktopComputer } from "react-icons/hi";

const IconComponent = () => {
  return (
    <div style={{ fontSize: "30px", color: "slate" }}>
      <h1>
        Computer Icon <br />
        {<HiOutlineDesktopComputer />}
      </h1>
    </div>
  );
};

export default IconComponent;
