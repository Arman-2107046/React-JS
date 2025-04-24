import { useEffect, useState } from "react";

const UseEffectJSON = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Define an asynchronous function to fetch data from an API
    async function getData() {
      // Await pauses the function execution until the fetch request is complete
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );

      // Await pauses the function execution until the response is converted to JSON
      const data = await response.json();

      // If data exists and has length, update the state with the fetched data
      if (data && data.length) setData(data);
      console.log(data);
    }

    // Call the getData function to initiate the data fetching
    getData();
  }, []);

  return (
    <div>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <ol key={Math.random()}>
              <li> UserId:{item.userId}</li>
              <li>Id: {item.id}</li>
              <li>Title:{item.title}</li>
              {/* <li> {item.completed} </li> */}
            </ol>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseEffectJSON;
