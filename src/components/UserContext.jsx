import React, { createContext, useState } from "react";
import UserProfile from "./UserProfile";

export const Data = createContext();

const UserContext = () => {
  const [user, setUser] = useState({ name: "Andres Iniesta" });

  function updateUser(newName) {
    setUser({ name: newName });
  }

  return (
    <div>
      <Data.Provider value={{ user, updateUser }}>
        <UserProfile />
      </Data.Provider>
    </div>
  );
};

export default UserContext;

// import React from "react";
// import { createContext, useState } from "react";
// import UserProfile from "./UserProfile";

// const Data = createContext();

// const UserContext = () => {
//   const [user, setUser] = useState({ name: "Robert Lewandowsky" });

//   function updateUser(newName) {
//     setUser({ name: newName });
//   }

//   return (
//     <div>
//       <Data.Provider value={{user, updateUser}}>
//         <UserProfile />
//       </Data.Provider>
//     </div>
//   );
// };

// export { Data, UserContext };
