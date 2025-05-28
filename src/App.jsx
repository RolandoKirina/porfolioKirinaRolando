import { useState } from 'react'

import './App.css'
import HeroSection from './components/HeroSection'
import Projects from './components/Projects'
function App() {
  const [count, setCount] = useState(0)
return (
    <div className="mainContainer">
      <HeroSection />
      <Projects />
    </div>
  )
}

export default App
