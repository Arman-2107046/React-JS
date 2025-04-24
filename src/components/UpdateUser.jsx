import React, { createContext } from "react";
import UserProfile from "./UserProfile";

export const UpadatedData = createContext();

const UpdateUser = () => {
  const updatedName = "Raphinha Dias";

  return (
    <div>
      <UpadatedData.Provider value={updatedName}>
        <UserProfile />
      </UpadatedData.Provider>
    </div>
  );
};

export default UpdateUser;
