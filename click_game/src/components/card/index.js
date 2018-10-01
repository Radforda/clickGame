import React from "react";

const Card = props=>{
    return(
    <div 
        onClick={()=>
            props.handleClick(props.letter)} 
        key={props.letter} 
        className="box,  col-md-3"
        > 
        <img className="cardImage" src={props.image}/>
            
    </div>
    );

};

export default Card;