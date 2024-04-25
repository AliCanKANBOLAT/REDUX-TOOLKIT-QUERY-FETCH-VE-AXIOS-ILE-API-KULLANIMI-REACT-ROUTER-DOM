import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import Container from './components/container'
import Row from './components/Row'
import RTKQueryCategories from './pages/RTK-Query/RTKQCategories'
import AxiosCategories from './pages/Axios/AxiosCategories copy'
import FetchCategories from './pages/Fetch/FetchCategories'

function App() {
const API_URL = import.meta.env.VITE_API_URL;
console.log("API_URL",API_URL)
  return (
    <>
      <Navbar />
      <hr />
      <Container className="mt-4">
        <Row>
          <Routes>
           <Route path='/' element={<HomePage />} />
           <Route path='/fetch-categories' element={<FetchCategories />} />
           <Route path='/rtk-query-categories' element={<RTKQueryCategories />} />
           <Route path='/axios-categories' element={<AxiosCategories />} />           
          </Routes>
       </Row>
      </Container>
    </>
  )
}

export default App
