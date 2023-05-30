import React,{useState,useRef} from "react";
import Card from '../UI/Card';
import Button from "./Button";
import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../helpers/Wrapper";


function AddUser(props) {

    //const [name,setName] = useState("");
    //const [age,setAge]= useState("");
    
    const nameUserRef = useRef();
    const ageUserRef = useRef();

     

    const [error,setError] =useState();


    // const nameHandler =(event)=>{
    //     setName(event.target.value);
    // }

    // const ageHandler=(event)=>{
    //   setAge(event.target.value);
    // }

    const onSubmitHandler = (event) => {
    
        event.preventDefault(); //dosen't not send https request to browser

        const nameofUser = nameUserRef.current.value;
        const ageofUser = ageUserRef.current.value;

        
        const userData ={
            "name":nameofUser,
            "age":ageofUser,
            "id":Math.random()
        }
        if(nameofUser.trim().length===0||ageofUser.trim().length===0){
            setError({
                title:"invalid input",
                message:"please enter a valid name and age (non-empty values)",
                
            });
            return;
        }
        if(+ageofUser<1){
            setError({
                title:"invalid Age",
                message:"please enter age (greater than 1)",
                
            });
            return
        }
    props.dataTransfer(userData);
     //setName("");
     //setAge("");
     nameUserRef.current.value="";
     ageUserRef.current.value="";


};
    const okayClickerHandler =()=>{
        setError(null);
    }

    return (
        <React.Fragment>
        {error && <ErrorModal title ={error.title} message={error.message} okayClicker={okayClickerHandler} /> }
        <Card className={styles.input} >
            <form onSubmit={onSubmitHandler} >
                <label htmlFor="name">username</label>
                <input id="name" type="text"  ref={nameUserRef} />
                <label htmlFor="age"  >age</label>
                <input id="age" type="number"  ref={ageUserRef} />
                <Button type="submit">Add</Button>
            </form>
        </Card>
        </React.Fragment>
    );
}

export default AddUser;
