import React from "react";
import {Modal, Spinner} from 'react-bootstrap';

function Loader(props) {

  return (
    <Modal show={props.show} style={{ textAlign: 'center' }} onHide={props.handleClose} backdrop='static' keyboard={false} >
      <Modal.Body>
        <Spinner animation='border' variant='warning' role='status'>
        </Spinner>
        <p>Authenticating.....</p>
      </Modal.Body>
    </Modal>
  );
}

export default Loader;