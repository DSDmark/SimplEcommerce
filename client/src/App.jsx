import React from "react";
import RoutesLayout from "./routers/RoutesLayout"
import { MainLayout, Header } from "./components/";

function App() {
  return (
    <MainLayout>
      <RoutesLayout />
    </MainLayout >
  )
}

export default App
