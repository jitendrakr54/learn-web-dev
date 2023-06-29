import React, { useState } from "react";
import AddUser from "./component/Users/AddUser";
import UsersList from "./component/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  // const addUserHandler = (user) => {
  //   setUsersList((prevUsersList) => {
  //     return [user, ...prevUsersList];
  //   });
  //   console.log(usersList);
  // };

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
    console.log(usersList);
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
