import React from 'react';
import '../css/service.css';
import Navbar from '../home/Navbar';
import dropdata from '../data_models/Drop_Data';
import {Container, Row, Col, Carousel} from 'react-bootstrap';
import Gray_Placeholder from '../images/Gray_Carousel_Placeholder.png';
import Black_Placeholder from '../images/Black_Carousel_Placeholder.png';
import Gold_Placeholder from '../images/Gold_Carousel_Placeholder.png';
import Footer from '../home/Footer';

function Service() {


  return (
    <section>
      <Navbar items={dropdata} cartAmount={sessionStorage.length} displayed={sessionStorage.length > 0 ? false : true} />

      <Container className='coaching-and-training-section-container'>
        <Row>
          <Col>
            <h1 className='coaching-and-training'>Coaching and Training</h1>
          </Col>
        </Row>
        <Row className='coaching-and-training-subsections'>
          <Col id='plan'>
          <h3>Personalized Workout Plan</h3>
          <i className='fa calender'>&#xf073;</i>
          <p className='coaching-and-training-description'>We'll take account the information you provide us along with your end goal to give you a working plan that is sustainable over a steady course of time.</p>
          
          </Col>
          <Col id='portfolio'>
            <h3>Individual Diet Portfolio</h3>
            <i className='fa briefcase'>&#xf0b1;</i>
            <p className='coaching-and-training-description'>Everyone needs to understand getting into shape isn't just about how you train yourself physically, diet is an important priority in order to lose fat or gain muscle.</p>            
          </Col>
          <Col id='consultation'>
            <h3>Life-Time Consultation</h3>
            <i className='fa consult'>&#xf2b5;</i>
            <p className='coaching-and-training-description'>Getting stuck or not seeing progress? Contact me and we'll have a discussion about how you have been doing on your diet or working plan, then modify as needed if you dont see results.</p>           
          </Col>
        </Row>        
      </Container>

      <Container className='enhancers-container'>
        <Row className='enhancers'>
          <Col lg={6}>
            <p id='enhancers-header'>Products To Enhance Everyday Athletics</p>
            <p id='enhancers-description'>Try out signature pre-workout powder that comes in 5 different flavors. We offer other supplements as well that is designed for beginners to expert athetlets, browse them in our shop.  </p>
          </Col>
          <Col lg={6}>
            <Carousel className='service-carousel'>
              <Carousel.Item>
                <img className='carousel-placeholder-image' src={Gray_Placeholder} alt='slide-two' />
                <Carousel.Caption>
                  <p className='carousel-title'>Supplements</p>
                  <p className='carousel-description'>Give These Supplements A Try</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className='carousel-placeholder-image' src={Black_Placeholder} alt='slide-two' />
                <Carousel.Caption>
                  <p className='carousel-title'>Pre-Workout Powder</p>
                  <p className='carousel-description'>Keeps You Moving When You need To The Most</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className='carousel-placeholder-image' src={Gold_Placeholder} alt='slide-three' />
                <Carousel.Caption>
                  <p className='carousel-title'>Enhancers</p>
                  <p className='carousel-description'>Get Ripped Faster With Our Enhancers</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>

      <Container className='commitment-contact'>
        <Row>
          <Col lg={6}>
          <i className='fa calender-contact'>&#xf073;</i>
          </Col>
          <Col lg={6}>
            <p id='commitment-header'>
              Free Consultation Before Any Commitment
            </p>
            <p id='commitment-description'>Not sold on our products or training plan? No problem! Give us a call and we'll be happy to discuss more in detail how our process to give you the best plan possible to meet your fitness works.</p>
          </Col>
        </Row>
      </Container>
      
      <Footer />
    </section>
    
  );
}

export default Service;