import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './Accueil.css'
import logo from './img/logo.jpg';
import { Link } from 'react-router-dom';
import Menu from './components/Menu';
import CartItem from './components/CartItem';

class Accueil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles : []
    }
  }
  async componentDidMount() {
    //generalement utilisé pour les appels réseaux
    const response = await fetch('http://localhost:1337/api/articles?populate=*', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const articles = await response.json()
    this.setState({articles:articles})
    
  }
  render(){
    return(
      <>
        <Menu/>
        <img id='imgaccueil' src={logo} alt="Logo EZ PC"/>
        <p id='description'>EZ PC, specialist in Internet sales of computer equipment, High-Tech and multimedia was founded at the dawn of the year 2022 and quickly became a major player in French e-commerce. Since its foundation, EZ PC has wanted to find a differentiated positioning, largely focused on its offer and customer relationship: product selection, quality of the site, advice but also service before and after sales. These assets have allowed EZ PC to be rewarded several times for its Customer Relations. Our teams are at your disposal to provide you with the best advice, whether you are an individual or a professional! <br/><br/>Our product specialists carefully select the references in our catalog to facilitate your choice and offer you the best quality/ price ratio. You will find a wide selection of the best PC components to equip your computer: motherboard, processor, graphics card, computer case and supply.</p>
        <div className="d-grid gap-2">
        <ModalCart />
          <Button variant="primary" size="lg">
            <Link id='linkproduct' to="/products"> GO TO PRODUCT PAGE </Link>
          </Button>
        </div>
      </>
    )
  }
}

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
          CART
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Your Cart</h4>
        {this.props.cart.map((element,i)=><CartItem element={element} key={i} />)}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


function ModalCart() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Accueil;