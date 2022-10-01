import { TLibrary } from "../../pages/Library/Library";
import { Container } from "./styles";

export function LibraryCard(props: {item: TLibrary}) {
  const {item} = props

  return (
    <Container>
      <h2>{item.data[0].title}</h2>
      <p>Nasa ID: {item.data[0].nasa_id}</p>
      <img src={item.links[0].href} />
      <p>{item.data[0].description}</p>
      <p>Keywords: {(item.data[0].keywords)?.join(' | ')}</p>
    </Container>
  )
}