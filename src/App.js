import React, { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import Try from "./Try";
import UserProvider from "./UserProvider";
import SuperHero from "./SuperHero";


function App() {
  // const [items,setItems]= useState([]);

  // const transferDataHandler=(data)=>{

  //   setItems(
  //     (prevData)=>{
  //       return [...prevData,data]
  //     }
  //   );

  //}
  return (
    <React.Fragment>
      {/* <AddUser dataTransfer={transferDataHandler} />
  <UserList users={items} /> */}
      <UserProvider>
        <SuperHero/>
      </UserProvider>
    </React.Fragment>
  );
}

export default App;
