import React from 'react'

const UserList = () => {

    const users = [
        { id: 1, name: "rafi", age: 22 },
        { id: 2, name: "alice", age: 28 },
        { id: 3, name: "bob", age: 34 },
        { id: 4, name: "charlie", age: 25 },
        { id: 5, name: "diana", age: 30 },
        { id: 6, name: "eve", age: 27 },
        { id: 7, name: "frank", age: 32 },
        { id: 8, name: "grace", age: 29 },
        { id: 9, name: "heidi", age: 31 },
        { id: 10, name: "ivan", age: 26 },
        { id: 11, name: "judy", age: 33 }
      ];
      

  return (
    <div>
        {
            users.map(({id,name,age})=>(

                <ul key={id}>

                <li>Name:{name}</li>
                <li>Age:{age}</li>

                </ul>
            ))
        }



    </div>
  )
}

export default UserList