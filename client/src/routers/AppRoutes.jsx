import { Route, Routes } from "react-router-dom"
import { Header } from "../components/"

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/home" element="" />
        <Route path="/about" element="" />
        <Route path="/products" element="" />
        <Route path="/singleproduct/:id" element="" />
        <Route path="/cart" element="" />
        <Route path="*" element="" />
      </Routes>
    </>
  )
}

export default AppRoutes;
