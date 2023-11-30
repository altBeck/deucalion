import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Portal, Wayaa } from './pages';

{/* 
  import { Navbar } from './components';
*/}

import './App.css'

function App() {

  return (
    <>
      <Router>

        {/*        
          <Navbar />
        */}

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/portal-check' element={<Portal />} />
          <Route exact path='/wayaa' element={<Wayaa />} />

        </Routes>

      </Router>

    </>
  )
}

export default App
