import React from "react";
import RoutesLayout from "./routers/RoutesLayout"
import { MainLayout } from "./components/";
import { Provider } from "react-redux"
import { store } from "./utils/"

function App() {
  return (
    <Provider store={store}>
      <MainLayout>
        <RoutesLayout />
      </MainLayout >
    </Provider>
  )
}

export default App
