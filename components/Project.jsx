import React from 'react'


function Card(props){
    return(
        <>
        <div className='props' 
        data-aos="flip-left"
        data-aos-duration="1000"
         id='project'>
          <img src={props.img}/>
          <h5>{props.name}</h5>
          <h6>{props.detail}</h6>
         <a href={props.link}> <button>code</button></a>
        </div>
        </>
    )
}
function Project() {
  return (
    <>
    <div className='Project'>

        <h1>Projects</h1>
        <div className='Amazon'>
          <Card
           
           name= "Amazone Home Page"
         detail="using html and css"
          img="/aspect/img4.jpg" 
          link="https://github.com/Gauravjoshi6/webPage.git"
          />

<Card
        
        name= " currency converter"
      detail="using html , css and javaScript"
       img="/aspect/img5.jpeg"  
       link="https://github.com/Gauravjoshi6/Currency.git"
          />
        </div>
        <div className='text'>
        <Card
           
           name= "Text editor"
         detail=" Using React js"
          img="/aspect/img6.png" 
          link="https://github.com/Gauravjoshi6/NewProject.git"
          />

<Card
        
        name= "Enter github id see project "
      detail="using JavaScript"
       img="/aspect/img7.jpg"  
       link="https://github.com/Gauravjoshi6/Enter-Github-user-name-and-a-pickup-button-to-pick-the-repo-should-be-added.git"
          />

        </div>

        <div className='more'>
          <p>More Projects on <span>Github</span></p>
          <a href='https://github.com/Gauravjoshi6?tab=repositories'><button>GITHUB</button></a>
        </div>
    </div>
    </>
  )
}

export default Project