import React, { useState } from 'react'
import { useContext } from 'react'

import {Data} from "./UserContext";


const UserProfile = () => {

  const {user,updateUser}=useContext(Data);
  const [nameToUpdate,setNameToUpdate]=useState('');

  return (
    <div>
      <h1>User Name: {user.name}</h1>

      <input type="text" 
      placeholder='Enter New Name'
      value={nameToUpdate}
      onChange={(e)=>(
        setNameToUpdate(e.target.value)
      )}
      />
      {/* //onClick does not pass arguments */}
      <button onClick={()=>{
        updateUser(nameToUpdate);
        setNameToUpdate('');
      }}>Update</button>

    </div>
  )
}

export default UserProfile

