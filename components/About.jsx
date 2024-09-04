import React from 'react'
import imgs from '/aspect/img1.jpeg'
import imgse from '/aspect/img2.png'
import imges from '/aspect/img3.jpg'



function About() {
  return (
    <>
   
    <div className='About' id='about'>
      <div><h1>About Me</h1></div>

      <div className=' card'
      data-aos="zoom-in"
      data-aos-duration="1000"
      >
      <div className='right'>
        <img src={imgs}/>
        </div>
        <div className='left'>
          <p>Name: Gaurav Joshi</p>
          <p>Job Role: Student</p>
          <p>Address: Uttarakhand, India</p>
        </div>
        
      </div>

      <div className='apj'
       data-aos="zoom-in"
       data-aos-duration="1000">
        <div>
          <img src={imgse}/>
        </div>

        <div className='collage'>
        <p>I am Pursuing B.Tech in CSE from Dr. A.P.J ABDUL</p>
        <p> KALAM INSTITUTE OF TECHNOLOGY, TANAKPUR.</p>
        </div>
      </div>


      <div className='apj'
       data-aos="zoom-in"
      data-aos-duration="1000"
      >
        <div>
          <img src={imges}/>
        </div>

        <div className='collage'>
     <p> Education:   Bachelor of Technology</p>  
     <p> Language:  English, Hindi</p>    
     <p> Other Skills:   Video editing, Animation, &Git</p> 
     <p> Interest:   Traveling, Travel Photography</p>  
    
 
   
   
     
        </div>
      </div>
      
     
    </div>
    </>
  )
}

export default About;