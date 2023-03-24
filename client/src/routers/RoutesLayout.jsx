import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppRoutes from "./AppRoutes"
import { Header, Footer } from "../components"

const RoutesLayout = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/*" element={<AppRoutes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default RoutesLayout
