import React from 'react';
import "./serv.css"
import HeartEmoji from "../../../images/heartemoji.png";
import humble from "../../../images/humble.png";
import glasses from "../../../images/glasses.png";
import Card from "../../card/card";
const Serv =() =>{
    return(
      <>
      <div className='services'>

       <div className='awesome'>
        <span> My Awesome</span>
        <span>Services</span>
        <span>
          UX/UI Design by FIGMA & SPLINE,..<br/>JAVA Devoleper,.
          WEB  Development
        </span>
        <button className='btn s-btn'>Download my Resume</button>
       </div>
          <div className='cards'>
            <div style={{left:'14rem'}}>
              <Card  
                emoji ={HeartEmoji}
                heading={'Design'}
                detail={'Figma,Skretch,photohop,Adobe'}
              />
            </div>
            <div style={{ top:'18rem',left:'-4rem'}}>
              <Card  
                emoji ={glasses}
                heading={'Developer'}
                detail={'HTML,CSS,,JAVASCRIPT,REACT'}
              />
            </div>
            <div style={{ top:'18rem',left:'35rem'}}>
              <Card  
                emoji ={humble}
                heading={'UX/UI'}
                detail={'SPLINE,FRAMER,FIGMA'}
              />
            </div>
          </div>
      </div>
      
      
      </>

    )
}
export default Serv;