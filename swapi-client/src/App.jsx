import { useState } from 'react'
import './App.css'
import People from './components/People'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Person from './components/Person';

function App() {
  const [count, setCount] = useState(0)

  return (
   <Router>
      <div>
        <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">SWAPI</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/people">People</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People />} />
          <Route path="/people/:id" element={<Person />} />
        </Routes>
      </div>
    </Router>

   
    // <>
    //   <Home />
    //   <People />
    // </>
  )
}

export default App
