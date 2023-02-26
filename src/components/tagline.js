import React from 'react';


import './tagline.css';

function Tagline() {
  function handleClick1(){
    window.location.href='https://chhawinder.github.io/HelpRight_signup/';
  }
  function handleClick2(){
    window.location.href='https://chhawinder.github.io/HelpRight_login3/';
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

      <button className="button" onClick={handleClick1}>SignUp</button>
      <button className="button" onClick={handleClick2}>LogIn</button>


    </div>
      
    </>
  );
}
export default Tagline;
