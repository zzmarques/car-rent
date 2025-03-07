import Container from './components/Container'
import Footer from './components/Footer'
import Header from './components/Header'
import Pickup from './components/Pickup'
import { Slide } from './components/Slide'
import './sass/main.scss'

function App() {

  return (
    <>
      <Header/>
        
      <Container>
        <Slide/>
        <Pickup/>
      </Container>

      <Footer/>
    </>
  )
}

export default App
