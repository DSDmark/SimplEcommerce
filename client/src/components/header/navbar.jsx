import React from 'react'
import { Grid, Box, AppBar, IconButton, styled, Toolbar, Typography, InputBase, Badge, MenuItem, Menu } from "@mui/material"
import { Menu as MenuIcons, Search, AccountCircle, Notifications, MoreVert } from "@mui/icons-material"
import NavbarIcons from "./navicons"
import SearchBar from './searchbar'


const Navbar = () => {
  const logo = "SimplEcommerce"
  return (
    <AppBar position="static">
      <Toolbar>
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
      </Toolbar>
    </AppBar >
  )
}

export default Navbar
