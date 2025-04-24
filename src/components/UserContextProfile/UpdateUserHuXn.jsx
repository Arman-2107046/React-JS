import React, { useContext, useState } from "react";

import { UserContextHuxn } from "./UserContextHuxn";

const UpdateUserHuXn = () => {
  const { updateUser } = useContext(UserContextHuxn);

  const [newName, setNewName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (newName.trim()) {
      updateUser(newName);
      setNewName("");
    }
  }

  return (
    <div>
      {/* <input type="text" 
      placeholder='Enter New Name'
      value={newName}
      onChange={
        (e)=>{
          setNewName(e.target.value)
        }
      } />

      <button onClick={()=>{
      updateUser(newName)
      setNewName('');
      }}>Update</button> */}

      <h1>Update User Name</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newName}
          placeholder="Enter New Name"
          onChange={(e) => {
            setNewName(e.target.value);
          }}
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateUserHuXn;
