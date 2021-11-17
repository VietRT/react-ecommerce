import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import '../css/session.css';

function Session() {
  return (
    <section>
      <Container className='home-session-container'>
        <Row  className='session-row'>
          <Col className='session-col'>
          <p>What can we offer you?</p>
          <p>
            Our coaching and training is different for each individual we help and we'll work with you from start to end to meet the goals to set. Find out how we work with you to get you started with services such as workout planning to and life-time consultation so you always know we're here to help.
          </p>
          </Col>
        </Row>
      </Container>
      <Container className='home-session-container three-step'>
        <Row className='session-row'>
          <Col lg={4}>
            <p>Let Our Service Do The Planning With Your Goal In Mind</p>
            <i className='fa task-management'>&#xf0ae;</i>
          </Col>
          <Col lg={4}>
            <p>Keep Your Diet Sustainable</p>
            <i className='fa task-management'>&#xf06c;</i>
          </Col>
          <Col lg={4}> 
            <p>Feeling lost? We're One Click Away To Help You</p>
            <i className='fa task-management'>&#xf09e;</i>
          </Col>
        </Row>
      </Container>
      <Container className='home-session-container'>
        <Row  className='session-row'>
          <Col className='session-col'>
          <p>
            Your just one click from reaching out for help, dont wait until next year to start your resolution.
          </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Session;