import Container from './components/Container'
import Header from './components/Header'
import { Slide } from './components/Slide'
import './sass/main.scss'

function App() {

  return (
    <>
      <Header/>
        
      <Container>
        <Slide/>
      </Container>
    </>
  )
}

export default App
