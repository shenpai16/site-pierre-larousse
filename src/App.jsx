import { useState } from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar' 
import HeroSwiper from './components/heroSwiper'
import SegpaPage from './pages/SegpaPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="w-full">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSwiper />} />
          <Route path="/segpa" element={<SegpaPage />} />
        </Routes>
      </Router>

      <HeroSwiper />
    </div>

    </>
  )
}

export default App
