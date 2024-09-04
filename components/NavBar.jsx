import React from "react";


function NavBar() {
  return (
    <>
    <nav className='Nav' 
    data-aos="fade-down"
    data-aos-duration="1000"
     >
      <div className="container" >
        <div className="left nav_bar">
          <h1>Gaurav Joshi</h1>
          </div>
          <div className="right">
          <a href="#" className="nav_bar">Home</a>
          <a href="#about" className="nav_bar">About</a>
          <a href="#resume" className="nav_bar">Resume</a>
          <a href="#project" className="nav_bar">Project</a>
          <a href="#contact" className="nav_bar">Contact</a>
          </div>
       
      </div>
      </nav>
    </>
  );
}

export default NavBar;
