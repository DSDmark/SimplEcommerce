import { Route, Routes } from "react-router-dom"
import { Header, About, Products, Home, Cart, Errorpage } from "../components/"

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/singleproduct/:id" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </>
  )
}

export default AppRoutes;
