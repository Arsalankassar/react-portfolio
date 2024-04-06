import React from "react";
import "./card.css";
const Card =({emoji,heading , detail}) =>{
    return(
        <>
        <div className="card">
            <img src={emoji}alt="naah"/>
           <span>{heading}</span>
           <span>{detail}</span>
           <button className="c_btn">LEARN MORE</button>
        </div>
        </>
    )
}
export default Card;