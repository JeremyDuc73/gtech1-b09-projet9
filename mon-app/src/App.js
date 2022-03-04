import './App.css';
import Accueil from './Accueil'
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
      </Routes>
    </Router>
  )
}

export default App;
