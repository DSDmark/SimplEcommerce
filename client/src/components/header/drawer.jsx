import React from 'react'
import { Grid, SwipeableDrawer, Typography, IconButton, Box } from "@mui/material"
import { Menu as MenuIcon } from "@mui/icons-material"

const Drawer = () => {
  return (
    <Box>
      <Grid container>
        <Grid item>
          <IconButton onClick="">
            <MenuIcon />
          </IconButton>
        </Grid>
        <Grid item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Drawer
