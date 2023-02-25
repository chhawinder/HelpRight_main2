import React, { useState } from 'react';
import './helpcard.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const quotes = [
  { text: 'I had the pleasure of working with the animal rescue organization last month and it was an incredible experience.  its heartwarming to see them find a happy ending. Im grateful to have been a part of such a great cause', author: 'Author 1' },
  { text: 'I recently volunteered with the medical aid organization, and it was an eye-opening experience. The team there is doing amazing work to provide healthcare to people in need. ', author: 'Author 2' },
  { text: 'I had the opportunity to volunteer with a literacy program for underprivileged children last month, and it was an unforgettable experience', author: 'Author 3' },
];

function QuoteCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000, // set the auto-rotation interval to 3 seconds
    slidesToShow: 2, // show 2 quotes in a single carousel
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768, // adjust the number of slides to show at different screen sizes
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="quote-carousel">
      <Slider {...settings}>
        {quotes.map((quote, index) => (
          <div key={index} className="quote-card">
            
            <div className="quote-text"> <i class="fa-solid fa-quote-left quote"></i><br/><br/></div>
            <div className="quote-text"> {quote.text}</div>
            <div className="quote-author">- {quote.author}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default QuoteCarousel;
