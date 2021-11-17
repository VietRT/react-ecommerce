import React from "react";
import '../css/carousel.css';
import {Container, Row, Col, Carousel} from 'react-bootstrap';
import slidesData from '../data_models/Slides_Data';

function HomeCarousel() {

  return (
    <section>
      <Container className='home-carousel-container'>
        <Row className='home-carousel-row'>
          <Col>
            <Carousel>
              {slidesData.map((slide) => {
                return <Carousel.Item key={slide.id}>
                <img className='home-carousel' src={slide.img} alt='mossy-placeholder'/>
                <Carousel.Caption>
                  <p>{slide.productName}</p>
                  <p>{slide.title}</p>
                </Carousel.Caption>
              </Carousel.Item>
              })}
            </Carousel>
          </Col>
        </Row>
      
      </Container>
   
    </section>
  );
}

export default HomeCarousel;