import { Link } from 'react-router-dom'
import './Home.css'

export function Home () {
  return (
    <div className='HomeButtons'>
      <Link to='/apod'>
        <button>APOD<p>Astronomy Picture of The Day</p></button>
      </Link>
      <Link to='/neo'>
        <button><p>UNDER CONSTRUCTION</p>NEO<p>Near Earth Object</p></button>
      </Link>
      {/* <button>Stars</button> */}
    </div>
  )
}