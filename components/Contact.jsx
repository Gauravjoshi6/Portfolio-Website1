import React from 'react'

function Contact() {
  return (
    <>
    <div id='contact'>
    <div className='contact' >
        <h1>Contact Me</h1>
        <p>Below are the details to reach out to me!</p>
        </div>
        <div className="images" >
          <div className='Address'
           data-aos="zoom-in"
           data-aos-duration="1000">
            
              <ul>
                
              <li className='aspects'><img src="/aspect/placeholder.png"/></li>          
         <li> <h1>Address</h1></li>
          <li><p>Uttarakhand, India</p></li>
          </ul>
          </div>
          
          <div  className='Address'
           data-aos="zoom-in"
           data-aos-duration="1000">
           <ul> 

          <li className='aspects'><img src="/aspect/telephone.png"/></li>         
         <li > <h1>Contact Number</h1></li>
         <li > <p><a href="tel://0101010101">+91 9410781396</a></p></li>
          </ul>
          </div>

            <div  className='Address'
             data-aos="zoom-in"
             data-aos-duration="1000">
            <ul> 
              
         <li className='aspects'><img src="/aspect/mail.png"/></li> 
          
       <li >  <h1>Email</h1></li> 
         <li > <p><a href="mailto:info@yoursite.com">gj41801@gmail.com</a></p></li>
          </ul> 
          </div>
          
        </div>
        <div className='linkedin'
         data-aos="zoom-in"
         data-aos-duration="1000">
          <ul>
            <li><p>Find me on</p></li>
            <li className='aspect'><a href='https://www.linkedin.com/in/gaurav-joshi-52239b284/'><img src='/aspect/linkedin.png' /></a></li>
            <li className='aspect'><a href='https://www.instagram.com/gauravjoshi9589/'><img src='/aspect/instagram.png'  /></a></li>
          
          </ul>
        </div>
    </div>
    </>
  )
}

export default Contact