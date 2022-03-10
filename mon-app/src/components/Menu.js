import React, { Component, } from 'react';
import './Menu.css';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

class Menu extends Component{
    render(){
        return(
            <Navbar id='navabar' bg="light" expand="lg">
            <Container id='containernavbar'>
                <Link id="EZPC" to="/">EZPC</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link id="links" to="/">Home</Link>
                    <hr></hr>
                    <Link id="links" to="/products">Products</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        );
    }
}


export default Menu;