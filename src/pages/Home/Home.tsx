import { Link } from 'react-router-dom'
import { Container } from './styles'

export function Home () {
  return (
    <Container>
      <Link to='/apod'>
        <button>APOD<p>Astronomy Picture of The Day</p></button>
      </Link>
      <Link to='/neo'>
        <button>NEO<p>Near Earth Object</p></button>
      </Link>
      <Link to='/library'>
        <button>Images<p>NASA Image Library</p></button>
      </Link>
    </Container>
  )
}