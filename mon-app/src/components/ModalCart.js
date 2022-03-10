
import React from "react";
import { Button } from "react-bootstrap";
import MyVerticallyCenteredModal from "./Modal";



function ModalCart(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button id="Modal" variant="primary" onClick={() => setModalShow(true)}>
        YOUR CART
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        cart = {props.cart}
      />
    </>
  );
}

export default ModalCart;