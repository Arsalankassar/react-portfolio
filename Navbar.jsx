import React from "react";

const Navbar = () => {
  return (
    <div className="n_wrapper">
      <div className="left">
        <div className="n_name" style={{fontWeight:'bolder',fontSize:'40px', color:'black'}}>Arsalan</div>
        <span></span>
      </div>
      <div className="right">
        <div className="n_list">
          <ul style={{ listStyleType: "none" }}>
            <li>Home</li>
            <li>Services</li>
            <li>Experience</li>
            <li>Portfolio</li>
          </ul>
        <button className="btn">Contact Us</button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
