import React, { useContext, useState } from 'react'
import { UserData } from './Provide'

const Update = () => {

    const {updateUser}=useContext(UserData);

    const [newName,setNewName]=useState('');
    
    function handleSubmit(e)
    {
        e.preventDefault();

        if(newName.trim())
        {
            updateUser(newName);

            setTimeout(() => {
                setNewName('');
            }, 800);
        }
    }

  return (
    <div>
        <h1>Update Profile Info</h1>

        <form onSubmit={handleSubmit}>
            <input type="text"
            placeholder='Enter New Name'
             value={newName}
             onChange={(e)=>{
                setNewName(e.target.value)
             }}/>

             <button type='submit'>Update</button>
        </form>
    </div>
  )
}

export default Update