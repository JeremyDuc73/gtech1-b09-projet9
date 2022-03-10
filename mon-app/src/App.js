import './App.css';
import Accueil from './Accueil'
import Products from './Products';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import ParticleBackground from './components/particleBackground';
import { Component } from 'react';
import Article from './components/Articles';


class App extends Component {
  constructor(){
    super();
    this.state = {
      cart : []
    }
  };

  componentDidMount = () => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    if (localStorage.getItem('cart') !=null)
    this.setState({cart:cart})
  }

  setItemCart = (article) => {

    this.setState({cart:[
      ...this.state.cart, article
    ]}, () => localStorage.setItem('cart', JSON.stringify(this.state.cart)))
    // console.log(this.state.cart)

  }

  


  render (){
    return (
      <>
      <ParticleBackground/>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path='/' element={<Accueil/>} />
            <Route exact path='/products' element={<Products cart={this.state.cart} setItemCart={this.setItemCart}/>} />
          </Routes>
        </Router>
      </div>
      </>
    );
  }
}



export default App;
