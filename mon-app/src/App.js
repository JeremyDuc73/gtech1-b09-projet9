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


class App extends Component {
  constructor(){
    super();
    this.state = {
      cart : []
    }
  };

  componentDidMount = () => {
    const cart = localStorage.getItem("cart")
    if (localStorage.getItem("cart") !=null)
    this.setState({cart:cart})
  }


  render (){
    return (
      <>
      <ParticleBackground/>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path='/' element={<Accueil/>} />
            <Route exact path='/products' element={<Products/>} />
          </Routes>
        </Router>
      </div>
      </>
    );
  }
}

export default App;
