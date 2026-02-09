import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar' 
import SegpaPage from './pages/SegpaPage'
import AccueilPage from './pages/AccueilPage'

function App() {

  return (
    <>
      <div className="w-full">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<AccueilPage />} />
            <Route path="/segpa" element={<SegpaPage />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App