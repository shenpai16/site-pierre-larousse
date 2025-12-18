import { useState } from 'react'
import './App.css'

import Navbar from './components/navbar' 
import HeroSwiper from './components/heroSwiper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="w-full">
      <Navbar />
      <HeroSwiper />
    </div>

    </>
  )
}

export default App
