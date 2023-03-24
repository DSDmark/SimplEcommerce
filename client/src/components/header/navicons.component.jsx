import React from 'react'
import { LocalShippingOutlined, PersonOutlined, LocalGroceryStoreOutlined } from "@mui/icons-material"
import { Grid, IconButton, Badge } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { isCartOpen } from "../../state/cart"

const NavIcons = () => {
  const dispatch = useDispatch();
  const cartLength = useSelector(state => state.cart.cart.length)

  return (
    <Grid container columnSpacing={2}>
      <Grid item>
        <IconButton onClick={() => dispatch(isCartOpen())} >
          <Badge color="secondary" badgeContent={cartLength}>
            <LocalGroceryStoreOutlined />
          </Badge>
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton>
          <LocalShippingOutlined />
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
