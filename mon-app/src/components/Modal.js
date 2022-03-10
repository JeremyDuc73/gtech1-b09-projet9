import React from "react";
import { Button, Modal } from "react-bootstrap";
import CartItem from "./CartItem";


function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Your Cart
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Your Items</h4>
          {props.cart.map((element,i)=><CartItem cart={props.cart} element={element} key={i} />)}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default MyVerticallyCenteredModal;