import React, { useContext } from 'react'
import { UserContextHuxn } from './UserContextHuxn';

const UserProfileHuXn = () => {

  const {user}=useContext(UserContextHuxn);


  return (
    <div>

      <h1>User Profile</h1>
      <h3>Name: {user.name}</h3>
      
    </div>
  )
}

export default UserProfileHuXn