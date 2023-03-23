import React from 'react'
import { Drawer, Grid, Typography, IconButton, Box } from "@mui/material"
import { Menu as MenuIcon } from "@mui/icons-material"
import SearchBar from './searchbar.component'
import NavIcons from './navicons.component'
import { useState } from 'react'

const DrawerComponent = () => {
  const logo = "SimplEcommerce"
  const [toggle, setToggle] = useState(false)

  const hendleToggle = () => {
    setToggle((prev) => !prev)
  }

  return (
    <>
      <Grid container>
        <Grid item>
          <Typography >
            {logo}
          </Typography>
        </Grid>
        <Grid item ml="auto">
          <IconButton onClick={hendleToggle}>
            <MenuIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Drawer open={toggle} >
        <Box justifyContent="center" >
          <IconButton onClick={hendleToggle}>
            <MenuIcon />
          </IconButton>
          <Typography>
            {logo}
          </Typography>
          <SearchBar />
          <NavIcons />
        </Box>
      </Drawer>
    </ >
  )
}

export default DrawerComponent
