import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";


function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
          <Card style={{ width: '18rem' }} onClick={handleShow}>
      <Card.Img variant="top" src="https://cdn.dribbble.com/users/2879528/screenshots/5855154/product_management_illustration.jpg" width={'100%'}  />
      <Card.Body>
        <Card.Title className='text-center'>Project Title</Card.Title>
      </Card.Body>
    </Card>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-6"><img src="https://cdn.dribbble.com/users/2879528/screenshots/5855154/product_management_illustration.jpg" width={'230px'} height={'180px'} alt="" /></div>
            <div className="col-6 text-center">
              <h2>Project Title</h2>
              <p style={{textAlign:'justify'}}>Description : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur amet eaque nesciunt architecto odit nostrum ad obcaecati vitae atque? Exercitationem veniam repudiandae cum consequuntur nesciunt? Eveniet doloremque ex odio aliquid.</p>
              <p>Technology used : <b> React, Node</b> </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className='d-flex justify-content-between'>
            <Button className='btn-secondary me-5'><a href=""><FaGithub /></a></Button>
            <Button className='btn-secondary me-5'><a href=""><FaLinkedin /></a></Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ProjectCard