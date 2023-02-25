import './Homepage.css';


import React, { useState, useEffect } from 'react';
import Carousel from './carousel';
import Navbar from './Navbar';
import Tagline from './tagline';
import ButtonToTop from './buttontotop';
import Counter from './counter';
import TopContributors from './topcontributer';
import Footer from './footer';
import QuoteCarousel from './helpcard';

function HomePage() {

   
  return (
    <>
    <Navbar/>
    <ButtonToTop/>
    <div className="container">
        
      
      <main>
        <div className='part-1'>
      <Carousel/>
       <div className='container '>
        <Tagline/>
       </div>
       
       <div className='container-1'>
       <h1>Volunteer for India Impact in 2022</h1>
        
       
       </div>
       <div className='container-1'>
       <div className='row mx-4'>
          <div className='col'><Counter number="500" text="Volunteer"/></div>
          <div className='col'><Counter number="300" text="NGO's"/></div>
          <div className='col'><Counter number="250" text="Core team"/></div>
          <div className='col'><Counter number="1000" text="Help post"/></div>
        
        
        </div>
       </div>
      <div className='container-2'>
       <TopContributors/></div>
       </div>




       <div className='cards row container-1'>
        <div className='col'>
        <QuoteCarousel  />
        </div>
        


       </div>
          
          
        
      
      </main>
    
    </div>


    <footer>
    <Footer/>
        <p>&copy; 2023 Our Company</p>
      </footer>
    </>
  );
}

export default HomePage;
