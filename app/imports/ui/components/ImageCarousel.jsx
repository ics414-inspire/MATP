import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const ImageCarousel = () => {
  // State to track the currently active slide
  const [index, setIndex] = useState(0);

  // Function to handle when a slide is selected
  // eslint-disable-next-line no-unused-vars
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {/* First Slide */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/spire_logo.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First Slide Label</h3>
          <p>Some description for the first slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Second Slide */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/spire_logo.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second Slide Label</h3>
          <p>Some description for the second slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Third Slide */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/spire_logo.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third Slide Label</h3>
          <p>Some description for the third slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageCarousel;
