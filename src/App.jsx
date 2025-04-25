import React from 'react'
import FetchHook from './components/CustomHooks/FetchHook'
import useFetch from './components/CustomHooks/useFetch'


const App = () => {

  const [data]=useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <div>
 <h1>User Info</h1>

{data && data.map((item) => {
  return (
    <li key={Math.random()}>
      {item.userId} : {item.title}
    </li>
  );
})}    </div>
  )
}

export default App