import React from 'react'
import { Grid, AppBar, Toolbar, useMediaQuery } from "@mui/material"
import NavbarIcons from "./navicons.component.jsx"
import SearchBar from './searchbar.component.jsx'
import DrawerComponent from "./drawer.component.jsx"
import Logo from './logo.component.jsx'
import { HeaderData } from "~/assets/data/"

const Navbar = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const { icons, logo } = HeaderData;

  const Nav = () => (
    <Grid container>
      <Grid item mr="auto">
        <Logo logoData={logo} />
      </Grid>
      <Grid item>
        <SearchBar />
      </Grid>
      <Grid item>
        <NavbarIcons iconsData={icons} />
      </Grid>
    </Grid>
  )

  return (
    <AppBar position="static">
      <Toolbar>
        {isMobile ? <DrawerComponent data={[logo, icons]} /> : <Nav />}
      </Toolbar>
    </AppBar >
  )
}

export default Navbar
