
import React, { useState, useEffect } from 'react';
import './carousel.css';







function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalTime = 5000; // change image every 5 seconds

  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'},

// { id: 1, src: {myImage}},
    // { id: 2, src: 'https://images.unsplash.com/photo-1494386346843-e12284507169?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'},

   
   
    //   { id: 3, src: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'},
    
    // { id: 4, src: 'https://images.unsplash.com/photo-1609139003551-ee40f5f73ec0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'},
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // setCurrentIndex(currentIndex === images.length - 1 ? 0 : (currentIndex + 1) % images.length);
      setCurrentIndex(currentIndex => (currentIndex + 1) % images.length);
    }, intervalTime);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div id="carousel-container">
      {images.map((image, index) => (
        <img
          key={image.id}
          src={image.src}
          className={index === currentIndex ? 'active' : ''}
          alt={`Image ${image.id}`}
        />
      ))}
    </div>
  );
}

export default Carousel;