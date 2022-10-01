import { Home } from './pages/Home/Home'
import { APOD } from './pages/APOD/APOD'
import { Asteroids } from './pages/NEO/NEO'
import { Route, Routes } from 'react-router-dom'
import { Library } from './pages/Library/Library'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/APOD' element={<APOD />} />
        <Route path='/NEO' element={<Asteroids />} />
        <Route path='/Library' element={<Library />} />
      </Routes>
    </div>
  )
}

export default App
