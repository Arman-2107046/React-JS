import React from "react";

const UserStatus = ({ loggedIn, isAdmin }) => {
  let welcomeMessage;
  if (loggedIn && isAdmin) {
    welcomeMessage = "Welcome Admin";
  } else if (loggedIn && !isAdmin) {
    welcomeMessage = "Welcome User";
  }

  return (
    <div>
      <h1>{welcomeMessage}</h1>
    </div>
  );
};

export default UserStatus;
