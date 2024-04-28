import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import Container from "./components/Container"
import Row from "./components/Row"
import FetchCategories from "./pages/Fetch/FetchCategories"
import FetchCategory from "./pages/Fetch/FetchCategory"
import AxiosCategory from "./pages/Axios/AxiosCategory"
import AxiosCategories from "./pages/Axios/AxiosCategories"
import RTKQueryCategories from "./pages/RTK-Query/RTKQCategories"

function App() {
  return (
    <>
      <Navbar />
      <Container className="mt-4 mb-4">
        <Row>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/fetch-categories" element={<FetchCategories />} />
            <Route path="/fetch-category/:categoryName" element={<FetchCategory />} />
            <Route path="/axios-categories" element={<AxiosCategories />} />
            <Route path="/axios-category/:categoryName" element={<AxiosCategory />} />
            <Route path="/rtk-query-categories" element={<RTKQueryCategories />} />
          </Routes>
        </Row>
      </Container>
    </>
  )
}

export default App
