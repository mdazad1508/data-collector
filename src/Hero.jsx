

const Hero = (props)=>{
    return (
        <div className="hero">
            <img src={props.imageUrl} />
             <h4>{props.name}</h4>
         </div>
    )
}

export default Hero;