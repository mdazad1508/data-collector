import { useState } from "react";
import userContex from "./userContex.jsx";

const UserProvider =(props)=>{
  
 const [name,setName] = useState("azad");

  const initialValue = {
    name,
    age:23,
    foo :()=>{setName((prevName)=>{
        return prevName + prevName
    })}
  }

  return (
       <userContex.Provider value ={initialValue}>
         {props.children}
       </userContex.Provider>
  )
}

export default UserProvider;