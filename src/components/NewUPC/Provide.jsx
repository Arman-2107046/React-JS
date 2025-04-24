import React, { createContext, useState } from "react";

const UserData = createContext();

const Provide = ({ children }) => {
  const [user, setUser] = useState({ name: "Robert Lewandowsky" });

  function updateUser(newName) {
    setUser({ name: newName });
  }

  return (
    <div>
      <UserData.Provider value={{ user, updateUser }}>
        {children}
      </UserData.Provider>
    </div>
  );
};

export { Provide, UserData};
