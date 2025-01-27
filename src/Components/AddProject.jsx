import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddProject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <button className='btn btn-secondary col-6 m-5' onClick={handleShow}>Add</button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-6 mt-4 p-5">
            <label>
          <input type="file" style={{display:'none'}} />
          <img width={'200px'} src="https://i.pinimg.com/originals/41/7e/be/417ebee986aec41629278b1e04cfbfe9.gif" alt="" />
        </label>
            </div>
            <div className="col-6">
              <input type="text" placeholder='Project title' className='form-control mb-3' />
              <input type="text" placeholder='Language Used' className='form-control mb-3' />
              <input type="text" placeholder='Git hub link' className='form-control mb-3' />
              <input type="text" placeholder='Live Link' className='form-control mb-3' />
              <input type="text" placeholder='OverView' className='form-control mb-3' />

            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-between'>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" >Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddProject