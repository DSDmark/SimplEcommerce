import React from 'react'
import { LocalShippingOutlined, PersonOutlined, LocalGroceryStoreOutlined } from "@mui/icons-material"
import { Grid, IconButton, Badge } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { shades } from "../../utils/theme"

const NavIcons = () => {
  return (
    <Grid container>
      <Grid item>
        <IconButton>
          <LocalGroceryStoreOutlined />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton>
          <Badge badgeContent={5} color="secondary">
            <LocalShippingOutlined />
          </Badge>
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton>
          <PersonOutlined />
        </IconButton>
      </Grid>
    </Grid >
  )
}

export default NavIcons
