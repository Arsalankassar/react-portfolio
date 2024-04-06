import React from "react";
import Navbar from "./component/Navbar";
import  './component/index.css';
import Intro from './component/intro';
import  './component/intro.css';
import Serv from "./component/floatingdiv/servic/serv";
import Exper from "./component/experoence/exper";

const App=() =>{
  return(
  <div className="app">
    <Navbar/>
    <Intro/>
    <Serv/>
    <Exper/>
  </div>

  );
};
export default App;
