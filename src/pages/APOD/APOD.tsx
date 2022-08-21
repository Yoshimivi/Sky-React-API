import { useEffect, useState } from 'react'
import { getCurrentDate } from '../../hooks/getCurrentData'
import { TDataAPOD, TDateAPOD } from '../../context/context'
import './APOD.css'

export function APOD() {
  const [data, setData] = useState<TDataAPOD>({} as TDataAPOD)
  // const [date,setDate] = useState<TDateAPOD>({} as TDateAPOD)
  let date = ''

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

  function randomDate () {
    const minDayMonth = 1
    const maxDay = 28
    const maxMonth = 12
    const minYear = 1995
    const maxYear = 2021
    const randomDay = minDayMonth + Math.random() * (maxDay - minDayMonth)
    const randomMonth = minDayMonth + Math.random() * (maxMonth - minDayMonth)
    const randomYear = minYear + Math.random() * (maxYear - minYear)
    const randomDate = `${Math.round(randomYear)}-${Math.round(randomMonth)}-${Math.round(randomDay)}`
    // setDate(randomDate)
    date = randomDate
    fetchAPI()
  }

  return (
    <div className='APODContainer'>
      <header>
        <input type="date" name="" id="awa" min="1995-06-15" max={getCurrentDate()} pattern="\d{4}-\d{2}-\d{2}" onChange={(e) => date = e.currentTarget.value} />
        {/* <input type="date" name="" id="awa" min="1995-06-15" max={getCurrentDate()} pattern="\d{4}-\d{2}-\d{2}" onChange={(e) => setDate(e.target.value)} /> */}
        <button type="button" onClick={()=>fetchAPI()}>Search</button>
        <button type="button" onClick={randomDate}>Random</button>
        <button type='button' onClick={resetToToday}>Today</button>
      </header>
      <div className="content">
        <h1>{data.title}{data.msg}</h1>
        <p>{data.date}</p>
        <img src={data.hdurl} />
        <p>Image credits: {data.copyright}</p>
        <p>{data.explanation}</p>
      </div>
    </div>
  )
}
