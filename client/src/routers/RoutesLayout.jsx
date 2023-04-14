import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { About, Errorpage } from "../components/"
import { Home, SingleProduct, Products } from "~/pages/"
import { Header, Footer } from "../components/"

const RoutesLayout = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={
          "error"
        } />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/cart" element="error" />
        <Route path="*" element={<Errorpage />} />
      </Routes>
      <Footer />
    </BrowserRouter >
  )
}

export default RoutesLayout
