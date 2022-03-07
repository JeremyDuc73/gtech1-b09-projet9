import './App.css';
import Accueil from './Accueil'
import Products from './Products';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Accueil/>} />
        <Route exact path='/products' element={<Products/>} />
      </Routes>
    </Router>
  )
}

export default App;
