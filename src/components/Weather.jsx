import React from "react";

const Weather = ({ temperature }) => {
  let weatherCondition='';
  if (temperature < 15) {
    weatherCondition = "It's Cold Outside";
  } else if (temperature > 15 && temperature < 25) {
    weatherCondition = "It's Nice Outside";
  } else {
    weatherCondition = "It's Hot Outside";
  }

  return (
    <div>
      <h1> {weatherCondition}</h1>
    </div>
  );
};

export default Weather;
