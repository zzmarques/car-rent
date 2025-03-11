import Container from './components/Container'
import Footer from './components/Footer'
import Header from './components/Header'
import Pickup from './components/Pickup'
import CatalogPopular from './components/CatalogPopular'
import { Slide } from './components/Slide'
import './sass/main.scss'
import CatalogRecomendation from './components/CatalogRecomendation'

function App() {

  return (
    <div>
      <Header/>
      <Container>
        <Slide/>
        <Pickup/>
        <CatalogPopular/>
        <CatalogRecomendation/>
      </Container>

      <Footer/>
    </div>
  )
}

export default App
