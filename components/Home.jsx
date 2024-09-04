import React, { useEffect, useRef } from 'react'
import img from '/aspect/img1.jpeg'
import Typed from 'typed.js'

function Home() {

  const typedRef = useRef(null)
  useEffect(() => {
    const options ={
      strings:["Welcome to my protfolio","My Name is Gaurav Joshi",
        "I am frontend Developer"],
        typeSpeed:50,
        backSpeed:50,
        loop:true
    }
  const typed = new Typed(typedRef.current,options)
    return () => {
      typed.destroy()
    }
  }, [])
  
  return (
    <>
    
    <div className='container Home'>
    <div className='left Hello'
    data-aos="fade-right"
    data-aos-duration="1000"
    >
      <h1 className='handing' ref={typedRef}></h1>
     <a href='/aspect/Gaurav (1).pdf' download="Resume.pdf"> <button>Download Resume</button></a>
    </div>

    <div className="right "
      data-aos="fade-left"
      data-aos-duration="1000">
        <img src={img} alt='' className='img'/>
    </div>
    </div>
    
    </>
  )
}

export default Home