import { useEffect, useState } from 'react'
import { TDataStars } from '../../context/context'
import './Stars.css'

export function Stars() {

  const [data, setData] = useState<TDataStars[]>([])
  // const [data, setData] = useState()
  let randomNumber = 1 + Math.random() * (10 - 1)
  // let randomPick = 1 + Math.random() * (30 - 1)

  async function fetchAPI() {  
    const headers = { 'X-Api-Key': 'WGf2pE2BPrILpn0Ba/rCcw==CctM1QWlDIzo90xR'}
    await fetch(`https://api.api-ninjas.com/v1/stars?offset`, { headers })
    .then(response => response.json())
    .then(data => {
      setData(data)
    })  
  }

  useEffect(() => {
    fetchAPI() 
    // console.log(randomNumber)
    // console.log(data[4].name)
  }, [])

  console.log(data)
  console.log(randomNumber)
  // console.log(data[1].name)
  return (
    <div className='StarsContainer'>
      {/* <p>{data}p</p> */}
      {/* <h1>{data.constellation}h</h1> */}
      <button type='button'>New Star</button>
      <h1>Name: {}</h1>
      
      <div className='StarDatas'>
        <h2>Constellation: </h2>
        <p>Right ascension:</p>
        <p>Declination:</p>
        <p>Apparent Magnitude:</p>
        <p>Absolute Magnitude:</p>
        <p>Distance Light Year:</p>
        <p>Spectral Class:</p>
      </div>
    </div>
  )
}