import React, { Component } from 'react';
import { Button, Container, Dropdown, Row } from 'react-bootstrap';
import Article from './components/Articles';
import './Products.css'
import Menu from './components/Menu';
import ModalCart from './components/ModalCart'
import ScrollToTop from "react-scroll-to-top";
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles : [],
      types : [],
      filter : ""
    }
  }
  async componentDidMount() {
    const response = await fetch('http://localhost:1337/api/articles?populate=*', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const articles = await response.json()
    this.setState({articles:articles})
  }

  changefilter(filtre){
    this.setState({filter:filtre})
  }  

  render() {
    let wui = this.state.articles.data;
    if(this.state.filter!=""){
      wui=wui.filter(article=>article.attributes.type.data.attributes.Type===this.state.filter)}
    return (
      <>
      <Menu/>
      <h2 id='titleh2'>My articles</h2>
          <ModalCart
            cart= {this.props.cart}
            id='Modal'
          /> 
          <Dropdown id='filters'>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            Filters
            </Dropdown.Toggle>
            <DropdownMenu>
              <Button onClick={()=>{this.changefilter("")}}>All</Button>
              <Button onClick={()=>{this.changefilter("Graphic card")}}>Graphic card</Button>
              <Button onClick={()=>{this.changefilter("Processor")}}>Processor</Button>
              <Button onClick={()=>{this.changefilter("Supply")}}>Power supply</Button>
              <Button onClick={()=>{this.changefilter("Motherboard")}}>Mother board</Button>
              <Button onClick={()=>{this.changefilter("Computer Case")}}>Computer case</Button>
            </DropdownMenu>
          </Dropdown>
      <Container>
        <Row>
            {wui && wui.map((articles,i)=><Article article={articles} cart={this.props.cart} setItemCart={this.props.setItemCart} key={i} />)}
        </Row>
      </Container>
      <ScrollToTop smooth />

      </>
    );
  }
}

export default Products;