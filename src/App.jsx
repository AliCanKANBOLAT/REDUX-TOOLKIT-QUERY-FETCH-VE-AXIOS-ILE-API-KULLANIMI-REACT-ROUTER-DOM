import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import Container from './components/container'
import Row from './components/Row'

function App() {


  return (
    <>
      <Navbar />
      <hr />
      <Container className="mt-4">
        <Row>
          <Routes>
           <Route path='/' element={<HomePage />} />
          </Routes>
       </Row>
      </Container>
    </>
  )
}

export default App
