import React from 'react';
import './style.css';

function Home() {
  return (
      <div className='container' id='homecontainer'>
      <div id='hello'>Hey there!, I'm-</div>
      <div id='name'>Praveen Raj.</div>
      <div id='para'>Full Stack Developer. <span id='spid'>A self-taught developer with an  <br/>
interest in Computer Science. <br/>Exploring opportunities and side projects.</span></div>
<div id='btns'>
<button  className='btn'>Email</button>
<button  className='btn'>Linkedin</button>

<button className='btn'>Github</button>

</div>

    </div>
  )
}

export default Home