import { Grid, IconButton, Badge, styled } from "@mui/material"
// import { isCartOpen } from "@/state/cart"
import { Link as RouterLink } from "react-router-dom"
import { shades } from "~/utils/theme"

const IconButtonStyle = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    background: shades.pri[500],
  }
}))

const NavIcons = ({ iconsData }) => {

  return (
    <Grid container columnSpacing={2}>
      {iconsData.map(data => {
        const { icon, route } = data;
        const Icons = icon
        return (
          <Grid item key={window.crypto.randomUUID()}>
            <RouterLink to={route}>
              <IconButtonStyle >
                <Badge>
                  <Icons />
                </Badge>
              </IconButtonStyle>
            </RouterLink>
          </Grid>
        )
      })}

    </Grid >
  )
}

export default NavIcons
