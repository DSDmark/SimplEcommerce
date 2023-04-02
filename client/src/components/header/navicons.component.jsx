import { Grid, IconButton, Badge, styled } from "@mui/material"
// import { isCartOpen } from "@/state/cart"
import { Link as RouterLink } from "react-router-dom"
import { shades } from "~/utils/theme"
import useToggleNavBar from "~/utils/toggleNavBar"

const IconButtonStyle = styled(IconButton)(({ isopen }) => ({
  background: isopen ? "" : shades.pri[500],
}))

const NavIcons = ({ iconsData }) => {
  const [isOpen] = useToggleNavBar();

  return (
    <Grid container columnSpacing={2}>
      {iconsData.map(data => {
        const { icon, route } = data;
        const Icons = icon
        return (
          <Grid item key={window.crypto.randomUUID()}>
            <RouterLink to={route}>
              <IconButtonStyle isopen={isOpen}>
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
