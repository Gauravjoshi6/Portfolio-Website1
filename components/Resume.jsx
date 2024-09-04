import React from 'react'

function Resume() {
  return (
    <>
    <div className='Resume' id='resume'>
        <h1>Resume</h1>
        <p className='para'>I am Pursuing Btech in CSE from Dr. A.P.J 
            ABDUL KALAM INSTITUTE OF TECHNOLOGY TANAKPUR</p>

            <div className='experience'>
                <h1>Experience</h1>
                <div className='computer'
                data-aos="zoom-in-down"
                data-aos-duration="1000"
                >
                    <h2 className='sun'>2022-2026</h2>
                    <h2>Computer Science Student</h2>
                    <h5>STUDENT</h5>
                    <p>I have not work experience. I am fresher.</p>
                </div>
            </div>

            <div className='fresher'>
            
                <h1>Education</h1>
                <div className='Education'>
                <div className='Btech'
                data-aos="zoom-in-down"
                data-aos-duration="1000">
                    <h2 className='sun'>2022-2026</h2>
                    <h2>Bachelor of Technology</h2>
                    <h6>DR A.P.J ABDUL KALAM INSTITUTE OF TECHNOLOGY TANAKPUR</h6>   
                    <p>Grade: First class distinction.</p>
                </div>
           

                <div className='Btech'
                data-aos="zoom-in-down"
                data-aos-duration="1000">
                    <h2 className='sun'>2021-2022</h2>
                    <h2>Higher Secondary School</h2>
                    <h6>UTTARAKHAND BOARD</h6>
                    <p>Grade: First class distinction.</p>
               
                </div>
            </div>
            </div>
    </div>

    </>
  )
}

export default Resume;