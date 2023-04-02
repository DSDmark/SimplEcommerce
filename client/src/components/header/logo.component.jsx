import React from 'react'
import { Link as MuiLink, styled } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { shades } from '~/utils/theme'
import useToggleNavBar from '~/utils/toggleNavBar'

const LogoLink = styled(MuiLink)(({ theme, isopen }) => ({
  [theme.breakpoints.down("md")]: {
    color: isopen ? shades.sco[500] : "",
  },
}))

const Logo = ({ logoData }) => {
  const { value, route } = logoData;
  const [isOpen] = useToggleNavBar();

  return (
    <LogoLink component={RouterLink} isopen={isOpen} to={route}>
      {value}
    </LogoLink>
  )
}

export default Logo

