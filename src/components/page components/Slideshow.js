import React from 'react';
import ReactDOM from 'react-dom';
import 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'


const Slideshow = () => (
  <Carousel>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src="/images/slide-1.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
        className="d-block w-100"
        src="/images/slide-2.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/images/slide-3.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);


//render(<ControlledCarousel />);

export default Slideshow;
// ReactDOM.render(<Slideshow />, document.getElementById('app'));