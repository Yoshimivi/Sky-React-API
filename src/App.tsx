import { useState } from 'react'
import './App.css'
import { Home } from './pages/Home/Home'
import { APOD } from './pages/APOD/APOD'
import { Stars } from './pages/Stars/Stars'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Home /> */}
      <APOD />
      {/* <Stars /> */}
    </div>
  )
}

export default App
