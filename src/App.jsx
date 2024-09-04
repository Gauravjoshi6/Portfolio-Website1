import React,{ useEffect, useState } from 'react'
import NavBar from '/components/NavBar.jsx'
import Home from '/components/Home.jsx'
import About from '/components/About.jsx'
import Resume from '/components/Resume.jsx';
import Project from '/components/Project.jsx';
import Contact from '/components/Contact.jsx';
import Aos from 'aos';
import "aos/dist/aos.css"
import './App.css'



function App() {
  // const [count, setCount] = useState(0)
useEffect(() => {
  Aos.init();

  
}, [])

  return (
    <>
     <NavBar/>
     <div className="container">
     <Home/>
     
     </div> 
     <div className="container"><About/>
     </div>
     <div className='container'><Resume/></div>
     <div className='container'><Project/></div>
     <div className='container'><Contact/></div>
    
    </>
  )
}

export default App
