import React from "react";
import RoutesLayout from "./routers/RoutesLayout"
import { MainLayout, Header } from "./components/";
import { Provider } from "react-redux"
import store from "./utils/store"

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
