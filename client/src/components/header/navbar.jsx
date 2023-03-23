import React from 'react'
import { Grid, AppBar, Toolbar, Typography, useMediaQuery } from "@mui/material"
import NavbarIcons from "./navicons.component.jsx"
import SearchBar from './searchbar.component.jsx'
import DrawerComponent from "./drawer.component.jsx"

const Navbar = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const logo = "SimplEcommerce"

  const Nav = () => (
    <Grid container>
      <Grid item mr="auto">
        <Typography variant="title">
          {logo}
        </Typography>
      </Grid>
      <Grid item>
        <SearchBar />
      </Grid>
      <Grid item>
        <NavbarIcons />
      </Grid>
    </Grid>
  )

  return (
    <AppBar position="static">
      <Toolbar>
        {isMobile ? <DrawerComponent /> : <Nav />}
      </Toolbar>
    </AppBar >
  )
}

export default Navbar
