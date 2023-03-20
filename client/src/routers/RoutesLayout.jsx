import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppRoutes from "./AppRoutes"

const RoutesLayout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AppRoutes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesLayout
