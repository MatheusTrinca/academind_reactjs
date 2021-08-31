import React, { useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const length = slides.length;

  const prevSlide = () => {
    setCurrent(current - 1 < 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current + 1 >= length ? 0 : current + 1);
  };

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {slides.map((slide, index) => (
        <div className={`slide ${index === current && 'active'}`} key={index}>
          {current === index && (
            <img src={slide.image} alt="Travel" className="image" />
          )}
        </div>
      ))}
    </section>
  );
};

export default ImageSlider;
