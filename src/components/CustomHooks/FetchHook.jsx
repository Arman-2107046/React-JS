import React, { useState, useEffect } from "react";

const FetchHook = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) =>res.json())
      .then((info) => setData(info));
  }, []);

  return (
    <div>
      <h1>User Info</h1>

      {data.map((item) => {
        return (
          <li key={Math.random()}>
            {item.userId} : {item.title}
          </li>
        );
      })}
    </div>
  );
};

export default FetchHook;
