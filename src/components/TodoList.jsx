import React, { useEffect, useState } from "react";

const TodoList = () => {

    //creating todoArray by using the same array from localStorage. If not found an empty array is added
  const [todoArray, setTodoArray] = useState(() => {
    const newTodoArray = localStorage.getItem("todoArray");

    return newTodoArray ? JSON.parse(newTodoArray) : [];
  });

  //useEffect keeps an eye on the todoArray, it updates the localStorage instantly when the array is updated
  useEffect(function () {
    localStorage.setItem("todoArray", JSON.stringify(todoArray));
  });

  //this function takes the id of input and gets the value then the array is updated
  function insertTodo() {
    const task = document.getElementById("todo-name").value;
    console.log(task);
    setTodoArray([...todoArray, task]);
  }

  //this function gets the index of the array and filters the particular element
  function deleteTodo(index) {
    setTodoArray(
      todoArray.filter((f, i) => {
        return i !== index;
      })
    );
  }

  return (
    <div>
        <h1>To Do List</h1>
      <form id="todo-form">
        <input type="text" id="todo-name" placeholder="Enter Tasks To Do" />
        <button onClick={insertTodo}>Insert</button>
      </form>

      {todoArray.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
