import React from 'react'
import { Drawer, Grid, Typography, IconButton, Box } from "@mui/material"
import { Menu as MenuIcon } from "@mui/icons-material"
import SearchBar from './searchbar.component'
import NavIcons from './navicons.component'
import { useState } from 'react'

const DrawerComponent = () => {
  const logo = "SimplEcommerce"
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle((prev) => !prev)
  }

  const handleCloseDrawer = () => {
    setToggle(false);
  };

  const MenuDrawer = () => (
    <Drawer open={toggle} onClose={handleCloseDrawer} >
      <Box>
        <Grid container direction="column" rowSpacing={2}>
          <Grid item width="100%">
            <Grid container direction="row" p={1} alignItems="center">
              <Grid item ml={2}>
                <Typography>{logo}</Typography>
              </Grid>
              <Grid item ml="auto">
                <IconButton onClick={handleToggle}>
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <SearchBar />
          </Grid>
          <Grid item>
            <NavIcons />
          </Grid>
        </Grid>
      </Box>
    </Drawer>
  )

  return (
    <>
      <Box width="100%">
        <Grid container>
          <Grid item>
            <Typography >
              {logo}
            </Typography>
          </Grid>
          <Grid item ml="auto">
            <IconButton onClick={handleToggle}>
              <MenuIcon />
            </IconButton>
          </Grid>
        </Grid>
        <MenuDrawer />
      </Box>
    </ >
  )
}

export default DrawerComponent
