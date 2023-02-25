import React from 'react';


import './tagline.css';

function Tagline() {
  function handleClick(){
    window.location.href='https://chhawinder.github.io/helprightFeed/';
  }
   function componentDidMount() {
    const taglineElement = document.querySelector('.tagline');
    taglineElement.classList.add('slide-in');
  }

  
  return (
    <>
    <div className='tag'>
      {componentDidMount}
      <h1>HELP FOR <br /> BETTER FUTURE</h1>
      <p>Volunteer to Make the World Better</p>

      <button className="button" onClick={handleClick}>SignIn</button>
      <button className="button" onClick={handleClick}>LogIn</button>


    </div>
      
    </>
  );
}
export default Tagline;
