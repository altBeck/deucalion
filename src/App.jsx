import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages';
import { Navbar } from './components';

import './App.css'

function App() {

  return (
    <>
      <Router>

        <Navbar />

        <Routes>
          <Route exact path='/' element={<Home />} />

        </Routes>

      </Router>

    </>
  )
}

export default App
