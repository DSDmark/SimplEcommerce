import React from 'react'
import { Link as MuiLink } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { shades } from '~/utils/theme'

const Logo = ({ logoData, isOpen = false }) => {
  const { value, route } = logoData;
  const logoColor = isOpen ? shades.sco[400] : shades.sco[100];

  return (
    <MuiLink component={RouterLink} sx={{ color: logoColor }} to={route}>
      {value}
    </MuiLink>
  )
}

export default Logo

