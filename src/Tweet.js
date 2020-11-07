import React, { useState } from 'react'
import "./App.css"

function Tweet(props){
const [Like, setLike] = useState(0); 

const inc = () =>{
    Like ? setLike(Like-1) : setLike(Like+1);
};

    return(
        <div className="back">
            <h1>{props.name}</h1>
            <h3>{props.con}</h3> 
            <p>{Like}</p>
            <button onClick={inc}> 👍 </button>   
        </div>
    );

}

export default Tweet;