import { useEffect, useState } from 'react'
import { getCurrentDate } from '../../hooks/getCurrentData'
import { TDataAPOD, TDateAPOD } from '../../context/context'
import './APOD.css'
import { Link } from 'react-router-dom'

export function APOD() {
  const [data, setData] = useState<TDataAPOD>({} as TDataAPOD)
  // const [date,setDate] = useState<TDateAPOD>({} as TDateAPOD)
  
  async function fetchAPI() {  
    await fetch(`https://api.nasa.gov/planetary/apod?api_key=KUmvc5mhapfLsYHNZI1W4F0U8chHBi9Ig5lFNyxm${date ? `&date=${date}` : ""}`)
    .then(response => response.json())
    .then(data => {
      setData(data)
    })
  }

  useEffect(() => {
    fetchAPI()
  }, [])

  function resetToToday() {
    date = ''
    // setDate({})
    fetchAPI()
  } 
  
  let date = ''
  function randomDate () {
    let dateYear = new Date () 
    let year = dateYear.getFullYear()-1;
    const randomDay = 1 + Math.random() * (30 - 1)
    const randomMonth = 1 + Math.random() * (12 - 1)
    const randomYear = 1996 + Math.random() * (year - 1996)
    const randomDate = `${Math.round(randomYear)}-${Math.round(randomMonth)}-${Math.round(randomDay)}`
    // setDate(randomDate)
    date = randomDate
    fetchAPI()
  }

  let mediaType:any = ''
  if (data.media_type == 'image') {
    mediaType = <img src={data.hdurl} />
  } else mediaType = <iframe src={data.url}></iframe>


  return (
    <div className='APODContainer'>
      <nav>
        <Link to='/'>
          <button type='button'>Home</button>
        </Link>
        <Link to='/neo'>
          <button type='button'>NEO</button>
        </Link>
      </nav>
      <header>
        <input type="date" name="" id="awa" min="1995-06-16" max={getCurrentDate()} pattern="\d{4}-\d{2}-\d{2}" onChange={(e) => date = e.currentTarget.value} />
        <button type="button" onClick={()=>fetchAPI()}>Search</button>
        <button type="button" onClick={randomDate}>Random</button>
        <button type='button' onClick={resetToToday}>Today</button>
      </header>
      <div className="content">
        <h1>{data.title}{data.msg}</h1>
        <p>{data.date}</p>
        {data.hdurl ? <img src={data.hdurl} /> : <iframe src={data.url}></iframe>}
        {data.copyright&&<p>Image credits: {data.copyright}</p>}
        <p>{data.explanation}</p>
      </div>
    </div>
  )
}
