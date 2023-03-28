import { Grid, IconButton, Badge, styled } from "@mui/material"
// import { isCartOpen } from "@/state/cart"
import { Link as RouterLink } from "react-router-dom"
import { shades } from "@/utils/theme"

const IconButtonStyle = styled(IconButton)(({ theme, isOpen }) => ({
  color: isOpen ? shades.sco[500] : shades.sco[100]
}))
const NavIcons = ({ iconsData, isOpen = false }) => {

  return (
    <Grid container columnSpacing={2}>
      {iconsData.map(data => {
        const { icon, route } = data;
        const Icons = icon
        return (
          <Grid item key={window.crypto.randomUUID()}>
            <RouterLink to={route}>
              <IconButtonStyle isOpen={isOpen}>
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
