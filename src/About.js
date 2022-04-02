import React from 'react'

function About() {
  return (
    <>
    <h1 className='mt-3' style={{color:'white'}}>About me</h1>

    <div className='hmcontnr'> 
    <div className='row'>
      <div className='col-lg-4'>
<img src='./skilllogos/html.jpeg' alt='pro'/>
      </div>
      <div className='col-lg-8'>
<p id='aboutpara'><span id='abtprspn'>I'm Praveen and I'm a</span><br/>
Full stack developer from chennai, who loves to transform ideas into reality using code and 
enjoy creating things that live on the internet. I Have experience in developing and deploying 
responsive websites, web applications and creating CRUD APIs. My core skill is based on 
JavaScript. I love to make the web more open to the world. I am versatile and creative, 
I believe that having an open mind can help you remain creative and grasp ideas from any 
subject to implement it in your field.
 Looking forward to enhancing my skills, explore new challenges and grow professionally.</p>
      </div>
    </div>
    </div>
    </>
  )
}

export default About