import React, { useEffect, useState } from "react";

const ExampleThree = () => {
  //Here a function has been declared in useState that fetches the value of name from local storage, If the value is not found then it sets the initial name to "", otherwise the name fetched from local storage
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem("name");

    return savedName ? JSON.parse(savedName) : "";
  });

  //It keeps an eye on the variable name, if something is assigned to name it instantly updates the local storage
  useEffect(function () {
    localStorage.setItem("name", JSON.stringify(name));
  });

  //This function is called when  anything is changed inside the in put box. then it takes the value and puts in into name variable
  function handleChange(event) {
    setName(event.target.value);
    // console.log(event.target);

  }

  //it sets the name variable to empty string
  function handleClear() {
    setName("");
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h1 style={{ fontSize: '24px', color: '#333' }}>Your Name: {name}</h1>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter Your Name"
        style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px', marginBottom: '10px' }}
      />
      <button 
        onClick={handleClear}
        style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Clear Name
      </button>
    </div>
  );
};

export default ExampleThree;
