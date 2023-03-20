import React from "react"
import CssBaseline from "@mui/material/CssBaseline"
import ThemeProvider from "@mui/material/styles/ThemeProvider"
import { theme } from "../../utils/"
import RoutesLayout from "../../routers/RoutesLayout"
const MainLayout = ({ children }) => {
  return (
    <RoutesLayout>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </RoutesLayout>
  )
}

export default MainLayout 
