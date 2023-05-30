import React from "react";
import Card from "../UI/Card";
import styles from "./UserList.module.css";

const UserList =(props)=>{
    return(
      <Card className={styles.users} >
        <ul>
            
            {props.users.map(user=> 
                <li key={user.id}> NAME: {user.name} AGE:  { user.age} years old</li>
                )}
            
        </ul>
    </Card>  

    );
}

export default UserList;