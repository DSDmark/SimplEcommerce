import { Route, Routes } from "react-router-dom"
import { About, Products, Home, Errorpage } from "../components/"

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/singleproduct/:id" element={<Products />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </>
  )
}

export default AppRoutes;
