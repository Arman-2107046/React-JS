import React, { useContext } from 'react'
import { UserData } from './Provide'

const Profile = () => {

    const {user}=useContext(UserData);

  return (
    <div>
        <h1>User Profile</h1>
        <h3>User Name: {user.name}</h3>
    </div>
  )
}

export default Profile