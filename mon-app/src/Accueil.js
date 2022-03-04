import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Article from './components/Articles';

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
  render() {
    console.log(this.state.articles);
    return (
      <>
      <h1>My articles</h1>
      <Container>
        <Row>
            {this.state.articles.data && this.state.articles.data.map((articles,i)=><Article article={articles} key={i} />)}
        </Row>
      </Container>
      </>
    );
  }
}

export default Accueil;