import React,{Fragment, useContext,useEffect} from "react";
import userContex from "./userContex.jsx";

const Try =()=>{
  
  const {name,age,foo} = useContext(userContex);

  useEffect(()=>{
    localStorage.setItem("name",name)
    console.log("useEffect runned!!");

    return ()=>{
        localStorage.clear();
        console.log("cleanup runned")
    }
  },[name])

  return (
    <Fragment>
    <p> this is my tri component <b>{name} {age} </b></p>
    <h1>{localStorage.getItem("name")}</h1>
    <button onClick={()=>{foo()}} >Change Name</button>
    </Fragment>
  )
}

export default Try;