import Container from './components/Container'
import Footer from './components/Footer'
import Header from './components/Header'
import Pickup from './components/Pickup'
import Popular from './components/Popular'
import { Slide } from './components/Slide'
import './sass/main.scss'

function App() {

  return (
    <div>
      <Header/>
        
      <Container>
        <Slide/>
        <Pickup/>
        <Popular/>
      </Container>

      <Footer/>
    </div>
  )
}

export default App
