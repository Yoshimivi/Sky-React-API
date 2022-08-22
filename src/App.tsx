import { useState } from 'react'
import './App.css'
import { Home } from './pages/Home/Home'
import { APOD } from './pages/APOD/APOD'
import { Stars } from './pages/Stars/Stars'
import { Asteroids } from './pages/Asteroids/Asteroids'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Home /> */}
      <APOD />
      {/* <Asteroids /> */}
      {/* <Stars /> */}
    </div>
  )
}

export default App
