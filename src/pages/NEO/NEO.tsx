import { TDataAsteroids } from '../../types'
import { useEffect, useState } from 'react'
import { getCurrentDate } from '../../hooks/getCurrentData'
import { AsteroidCard } from '../../components/AsteroidCard/AsteroidCard'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Container } from './styles'
import { PageButton } from '../../components/PageButton'


export function Asteroids() {
  const [dataAsteroid, setDataAsteroid] = useState<TDataAsteroids[]>([])
  const [date, setDate] = useState(getCurrentDate())
  let selectedDate: string = ''
  let dateString = date.split('-').reverse().join('/')
    

  function axiosGet () {
    axios(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&detailed=false&api_key=KUmvc5mhapfLsYHNZI1W4F0U8chHBi9Ig5lFNyxm`)
    .then(response => {
      setDataAsteroid(response.data.near_earth_objects[date])
    })
  }

  function dataHandler() {
    if (selectedDate === '') {
      return
    } else {
      setDate(selectedDate)
    }    
  }

  useEffect(() => {
    axiosGet()
  }, [date])

  
  return (
    <Container>
      <nav>
        <Link to='/'>
          <PageButton>Home</PageButton>
        </Link>
        <Link to='/apod'>
          <PageButton>APOD</PageButton>
        </Link>
        <Link to='/neo'>
          <PageButton className='active'>NEO</PageButton>
        </Link>
        <Link to='/library'>
          <PageButton>Library</PageButton>
        </Link>
      </nav>
      <header>
        <input type="date" onChange={(e) => selectedDate=(e.currentTarget.value)}/>
        <PageButton onClick={dataHandler}>Search</PageButton>
      </header>
        <h1>{dateString}</h1>
        <h3 className='numberObjects'>Number of objects: {dataAsteroid?.length}</h3>
        <div>
          {dataAsteroid?.map(item=> <AsteroidCard item={item} key={item.name}/>)}
        </div>
    </Container>
  )
}