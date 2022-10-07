import { useEffect, useState } from 'react'
import { getCurrentDate } from '../../hooks/getCurrentData'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Container } from './styles'
import { PageButton } from '../../components/PageButton'

type TDataAPOD = {
  title: string;
  date: string;
  hdurl?: string; //image url
  url?: string; //video url
  media_type: string;
  copyright: string;
  explanation: string;
  msg?: string; //error message
}

export function APOD() {
  const [data, setData] = useState<TDataAPOD>({} as TDataAPOD)

  async function getAxios() {
    await axios((`https://api.nasa.gov/planetary/apod?api_key=KUmvc5mhapfLsYHNZI1W4F0U8chHBi9Ig5lFNyxm${date ? `&date=${date}` : ""}`))
    .then(response => {
      setData(response.data)
    })
  }

  useEffect(() => {
    getAxios()
  }, [])

  function resetToToday() {
    date = ''
    getAxios()
  } 
  
  let date = ''
  function randomDate () {
    let dateYear = new Date () 
    let year = dateYear.getFullYear()-1;
    const randomDay = 1 + Math.random() * (30 - 1)
    const randomMonth = 1 + Math.random() * (12 - 1)
    const randomYear = 1996 + Math.random() * (year - 1996)
    const randomDate = `${Math.round(randomYear)}-${Math.round(randomMonth)}-${Math.round(randomDay)}`
    date = randomDate
    getAxios()
  }


  return (
    <div className=''>
    <Container>
      <nav>
        <Link to='/'>
          <PageButton>Home</PageButton>
        </Link>
        <Link to='/apod'>
          <PageButton className='active'>APOD</PageButton>
        </Link>
        <Link to='/neo'>
          <PageButton>NEO</PageButton>
        </Link>
        <Link to='/library'>
          <PageButton>Library</PageButton>
        </Link>
      </nav>
      <header>
        <input type="date" name="" id="awa" min="1995-06-16" max={getCurrentDate()} pattern="\d{4}-\d{2}-\d{2}" onChange={(e) => date = e.currentTarget.value} />
        <PageButton onClick={()=>getAxios()}>Search</PageButton>
        <PageButton onClick={randomDate}>Random</PageButton>
        <PageButton onClick={resetToToday}>Today</PageButton>
      </header>
      <div className="content">
        <h1>{data.title}{data.msg}</h1>
        <p>{data.date}</p>
        {data.hdurl ? <img src={data.url} /> : <iframe src={data.url}></iframe>}
        {data.copyright&&<p>Image credits: {data.copyright}</p>}
        <p>{data.explanation}</p>
      </div>
    </Container>
    </div>
  )
}
