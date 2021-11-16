import React, {useState} from "react";
import '../css/about.css';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';
import dropData from '../data_models/Dropdown_Data';
import {Row, Col, Container, Offcanvas} from 'react-bootstrap';
import selfportrait from '../images/technology/Coding.svg';
import reactIcon from '../images/technology/React-Icon.svg';
import nodeJSIcon from '../images/technology/NodeJS-Icon.png';
import expressJSIcon from '../images/technology/Express.svg';
import mySQLIcon from '../images/technology/MySQL-Icon.svg';
import restAPIIcon from '../images/technology/RestAPI-Icon.svg';
import stripeIcon from '../images/technology/Stripe-Icon.svg';
import offcanvasData from '../data_models/Offcanvas_Data';

function About() {

  const [show, setShow] = new useState(false);

  const [offcanvasInfo, setOffcanvasInfo] = new useState([{
    offcanvasTitle: '',
    offcanvasBody: ''
  }]);

  function handleShow(e) {
    console.log(e.target.parentNode.id);
    let oci = [];

    oci = offcanvasData.filter((item) => {
      return item.id === e.target.parentNode.id
    });

    setOffcanvasInfo(oci);
    setShow(true);
  }

  function handleClose()  {
    setShow(false);
  }

  return (
    <section>
      <Navbar items={dropData} cartAmount={sessionStorage.length} displayed={sessionStorage.length > 0 ? false : true} />
      <Container className='about-container'>
        <Row className='my-project-row'>
          <Col lg={6}>
          <p id='my-project-header'>Thanks for checking out my project.</p>
          <p id='my-project-description'>This has definitely been a longtime coming project and it is only getting bigger as I keep working on it. I wanted to talk about why I started this ecommerce web application so here is a deep dive about my experiences with it.</p>
          <p id='initials'>-Ryan, Developer</p>
          </Col>
          <Col lg={6}>
          <img src={selfportrait}  id='self-portrait' alt='self-portrait' />
          </Col>
        </Row>
      </Container>

      <Container className='technology-container'>
         <Row className='technology-row'>
           <Col>
            <p id='technology-stack-header'>Lets go over some of the technology I used to create my ecommerce web application project.</p>
            <p className='technology'>
            .React 
            .NodeJS 
            .Express
            .MySQL 
            .REST API
            .Stripe</p>
            <p className='technology'>And much more.</p>
            <p className='technology'>Feel free to click on each of the icons to see more information.</p>
            <button className='tech-offcanvas' id='react-offcanvas' onClick={handleShow}>
              <img src={reactIcon} className='technology-icon' alt='react-icon'/>
            </button>

            <button className='tech-offcanvas' id='nodeJS-offcanvas' onClick={handleShow}>
              <img src={nodeJSIcon} className='technology-icon' alt='react-icon'/>
            </button>

            <button className='tech-offcanvas' id='expressJS-offcanvas' onClick={handleShow}>
              <img src={expressJSIcon} className='technology-icon' alt='react-icon'/>
            </button>

            <button  className='tech-offcanvas' id='mySQL-offcanvas' onClick={handleShow}>
              <img src={mySQLIcon} className='technology-icon' alt='react-icon'/>
            </button>

            <button className='tech-offcanvas' id='restAPI-offcanvas' onClick={handleShow}>
              <img src={restAPIIcon} className='technology-icon' alt='react-icon'/>
            </button>

            <button className='tech-offcanvas' id='stripe-offcanvas' onClick={handleShow}>
              <img src={stripeIcon} className='technology-icon' alt='react-icon'/>
            </button>
           </Col>
         </Row>
      </Container>

      <Container className='experience-container'>
        <Row className='experience-row'>
          <Col lg={4}>
            <p className='experience-quotes'>“Experience is the name everyone gives to their mistakes.” – Oscar Wilde</p>
            <p className='experience-quotes'>"Before software can be reusable it first has to be usable.” – Ralph Johnson</p>
            <p className='experience-title'>I wish I could say every moment of my development process was rainbows and sunshine, but that's only a developer's dream.</p>
            <p className='experience-title'> Over the course of the month after starting this project, I had exciting moments such as seeing my UI and styling come to life, just as much as facing difficult issues I had to problem solve by console log, debugging, and consulting to Stack Overflow experts.</p>
            <span>
              <p className='experience-title'>Have a look at my worse and best moments of my project, as well as how I solve problems.</p>
              <i className='fa arrow'>&#xf101;</i>
            </span>
          </Col>
          <Col lg={4}>
            <p id='experience-favorite'>Click on the icon below to see some of my favorite moments of the project.</p>
            <button className='experience-offcanvas' id='favorite-offcanvas' onClick={handleShow}>
              <i className='fa arrow'>&#xf039;</i>
            </button>
          </Col>
          <Col lg={4}>
          <p id='experience-issues'>Click on the icon below to see what kinds of issues I ran into and how I resolved it.</p>
          <button className='experience-offcanvas' id='issues-offcanvas' onClick={handleShow}>
          <i className='fa arrow'>&#xf039;</i>
          </button>
          </Col>
        </Row>
      </Container>

      <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>{offcanvasInfo[0].offcanvasTitle}</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <p id='description-wrapper'>{offcanvasInfo[0].offcanvasBody}</p>
              </Offcanvas.Body>
            </Offcanvas>
      <Footer />
    </section>
      
  );
}

export default About;