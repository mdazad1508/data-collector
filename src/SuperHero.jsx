import { useState,useEffect } from "react"
import axios from "axios";
import Hero from "./Hero";

const SuperHero =()=>{

    const [heros, setHeroes] = useState([]);

    useEffect(()=>{
       
    const fun = async()=>{
        try {
            const response = await axios.get('https://akabab.github.io/superhero-api/api/all.json');
            console.log(response.data);
            setHeroes(response.data);
          } catch (error) {
            console.error(error);
          }
    }
         fun();
       
    },[])


    return (
        <div className="superheroes">
           
            {heros.map(movie=>{
                return(
                <Hero imageUrl ={movie.images.xs} name={movie.name} key ={movie.id} />
                )
            })}
            
        </div>
    )
}

export default SuperHero;