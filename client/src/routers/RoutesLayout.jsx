import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { About, Products, Errorpage, Cart } from "../components/"
import { Home } from "~/pages/"
import { Header, Footer } from "../components/"

const RoutesLayout = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/singleproduct/:id" element={<Products />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default RoutesLayout
