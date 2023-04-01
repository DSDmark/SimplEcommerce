import React from 'react'
import { Link as MuiLink, styled } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { shades } from '~/utils/theme'

const LogoLink = styled(MuiLink)(({ theme, isOpen }) => ({
  [theme.breakpoints.down("md")]: {
    color: isOpen ? shades.sco[500] : shades.sco[100],
  },
}))

const Logo = ({ logoData, isOpen = false }) => {
  const { value, route } = logoData;
  return (
    <LogoLink component={RouterLink} isOpen={isOpen} to={route}>
      {value}
    </LogoLink>
  )
}

export default Logo

