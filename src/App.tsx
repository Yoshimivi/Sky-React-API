import { useState } from 'react'
import { Home } from './pages/Home/Home'
import { APOD } from './pages/APOD/APOD'
import { Stars } from './pages/Stars/Stars'
import { Asteroids } from './pages/Asteroids/Asteroids'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/APOD' element={<APOD />} />
        <Route path='/NEO' element={<Asteroids />} />
      </Routes>
      {/* <Home /> */}
      {/* <APOD /> */}
      {/* <Asteroids /> */}
      {/* <Stars /> */}
    </div>
  )
}

export default App
