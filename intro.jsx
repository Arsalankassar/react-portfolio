import React from "react";
import instagram from "../../src/images/instagram.png";
import linkedin from "../../src/images/linkedin.png";
import github from "../../src/images/github.png";
import vector from "../../src/images/Vector1.png";
import vector1 from "../../src/images/Vector2.png";
import boy from "../../src/images/boy.png";
import thumbup from "../../src/images/thumbup.png";
import crown from "../../src/images/crown.png";
import glassess from "../../src/images/glassesimoji.png";
import Floating from "./floatingdiv/floating"

const Intro =() =>{
    return(
        <>
        <div className="intro">
            <div className="i-left">
            <div className="i-name">       
            <span>Hy! I Am </span>
            <span> Arsalan </span>
            <span>Frontend developer with the fresher level of experience in web designing and development, </span>
        </div> 
            <button className=" i_btn">Hire Me</button>  
        <div className="i_icon">
          <img src={instagram} alt="naa " />
          <img src={linkedin} alt="naa " />
          <img src={github} alt="naa " />
            </div>      

        </div> 
        <div className="i-right">  
          <img src={vector} alt="naaa"/>
          <img src={vector1} alt="naaa"/>
          <img src={boy} alt="naaa"/>
          <img src={glassess} alt="naaa"/>
          <div style={{top:'4%' ,left:'60%'}}>
            <Floating image={crown} txt1="web" txt2="developer"/>
          </div>
          <div style={{top:'18rem' , left:'0rem'}}>
            <Floating image={thumbup} txt1='Best Design' txt2='Award'/>
          </div>
          <div className="blur" style={{background:"rgb 238 210 255"}}></div>
           <div className="blur" style={{background:'#C1F5FF', top:'17rem', width:'21rem', height:'11rem' ,left:'-9rem' }} ></div>
           </div>


        </div>
        
        </>
    )
}
export  default Intro;