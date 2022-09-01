import './Asteroids.css'
import { TDataAsteroids } from '../../types'
import { useEffect, useState } from 'react'
import { getCurrentDate } from '../../hooks/getCurrentData'
import { AsteroidCard } from '../../components/AsteroidCard'
import { Link } from 'react-router-dom'

export function Asteroids() {
  const [data, setData] = useState<TDataAsteroids[]>([])
  const [date, setDate] = useState(getCurrentDate())
  let selectedDate: string
  let dateString = date.split('-').reverse().join('/')
  
  async function fetchAPI() {
    await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&api_key=KUmvc5mhapfLsYHNZI1W4F0U8chHBi9Ig5lFNyxm`)
      .then(response => response.json())
      .then(data => {
        setData(data)
      })
  }

  function dataHandler() {
    fetchAPI()
    setDate(selectedDate)
  }

  useEffect(() => {
    fetchAPI()
  }, [])

  // console.log(date)
  console.log(data)
  // console.log(typeof(data))

  return (
    <div className='AsteroidsContainer'>
      <h1>UNDER CONSTRUCTION</h1>
      <nav>
        <Link to='/'>
          <button type='button'>Home</button>
        </Link>
        <Link to='/apod'>
          <button type='button'>APOD</button>
        </Link>
      </nav>
      <header>
        <input type="date" name="" id="" onChange={e => selectedDate=e.target.value}/>
        <button type='button' onClick={()=>dataHandler()}>Search</button>
      </header>
       <h1>{dateString}</h1>
      <div>container</div>
        {
          Array.from(data).map(item => <AsteroidCard item={item}/>)
        }    
    {/* {
        students.map(student => (<Card key={student.time} name={student.name} time={student.time}/>))
      } */}
      <h2>Next Days</h2>
      <p>date</p>
      <div>infos container secundary</div>
    </div>
  )
}




// STATS
// https://api.nasa.gov/neo/rest/v1/stats?api_key=KUmvc5mhapfLsYHNZI1W4F0U8chHBi9Ig5lFNyxm