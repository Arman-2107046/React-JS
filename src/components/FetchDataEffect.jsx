import React, { useEffect, useState } from "react";

const FetchDataEffect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      const fetchedData = await response.json();

      if (fetchedData && fetchedData.length) {
        setData(fetchedData);
      }
    }

    getData();
  }, []);

  return (
    <div>
      <h1>Data Found Through API</h1>

      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <ol key={Math.random()}>
              <li>UserId: {item.userId}</li>
              <li>Id: {item.id}</li>
              <li>Title: {item.title}</li>
              <li>Body: {item.body}</li>
            </ol>
            <br/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchDataEffect;
