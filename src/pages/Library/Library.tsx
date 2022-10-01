import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LibraryCard } from "../../components/LibraryCard/LibraryCard";
import { PageButton } from "../../components/PageButton";
import { Container } from "./styles";

export type TLibrary = {
  data: TData[]
  links: TLink[]
}

type TData = {
  title: string
  nasa_id: string
  keywords: string[]
  description: string
}

type TLink = {
  href: string
}

export function Library() {
  const [libraryData, setLibraryData] = useState<TLibrary[]>([])
  const [search, setSearch] = useState('')
  const [result, setResult] = useState(false)

  async function getAxios() {
    if (search === '') {
      return
    } else {
      await axios(`https://images-api.nasa.gov/search?q=${search}&media_type=image`)
      .then(response => {
        setLibraryData(response.data.collection.items)
        if (response.data.collection.items.length === 0) {
          setResult(true)
        } else {
          setResult(false)
        }
      })
    }
    
  }
  

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
          <PageButton>NEO</PageButton>
        </Link>
      </nav>
      <header>
        <input type="text" placeholder="Type any word" value={search} onChange={(e) => setSearch(e.target.value)}/>
        <PageButton onClick={getAxios}>Search</PageButton>
      </header>
      
      {result && <p className="errorMsg">Nothing found, verify if it's spelled correctly or try another word.</p>}
      
      {libraryData.length !== 0 && 
        <div className="cardsContainer">
          {libraryData && libraryData.map(item => <LibraryCard item={item} key={item.data[0].nasa_id} />)}
        </div>
      }
    </Container>
  )
}