import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './Accueil.css'
import logo from './img/logo.jpg';
import { Link } from 'react-router-dom';

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
      <div className='Accueil'>
        <img id='imgaccueil' src={logo} alt="Logo EZ PC"/>
        <p id='description'>EZ PC, specialist in Internet sales of computer equipment, High-Tech and multimedia was founded at the dawn of the year 2022 and quickly became a major player in French e-commerce. Since its foundation, EZ PC has wanted to find a differentiated positioning, largely focused on its offer and customer relationship: product selection, quality of the site, advice but also service before and after sales. These assets have allowed EZ PC to be rewarded several times for its Customer Relations. Our teams are at your disposal to provide you with the best advice, whether you are an individual or a professional! <br/><br/>Our product specialists carefully select the references in our catalog to facilitate your choice and offer you the best quality/ price ratio. You will find a wide selection of the best PC components to equip your computer: motherboard, processor, graphics card, computer case and supply.</p>
        <div className="d-grid gap-2">
          <Button variant="primary" size="lg">
            <Link id='linkproduct' to="/products"> GO TO PRODUCT PAGE </Link>
          </Button>
        </div>
      </div>
    )
  }
}

export default Accueil;