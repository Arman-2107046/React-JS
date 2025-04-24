import React, { useState } from "react";

const TodoListHuXn = () => {

    
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");


  //it works when submit is called
  function handleSubmit(e) {
    //prevents from refreshing
    e.preventDefault();

    //if invalue is not empty it is added to the array
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      //inputvalue is made empty
      setInputValue("");
    }
  }
//whenever something is changed its added to the input value variable
  function handleChange(e)
  {
    setInputValue(e.target.value);
  }

  return (
    <div>
      <h1>Todo List</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} placeholder="Add a new Todo" />
        <button type="submit">Add Todo</button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListHuXn;
