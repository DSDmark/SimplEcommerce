import { Drawer, Grid, IconButton, Box } from "@mui/material"
import { Menu as MenuIcon } from "@mui/icons-material"
import SearchBar from './searchbar.component'
import NavIcons from './navicons.component'
import { useToggleNavBar } from "~/utils"
import Logo from "./logo.component"

const DrawerComponent = ({ data }) => {
  const [logo, icons] = data;
  const [isOpen, handleToggle, handleClose] = useToggleNavBar();

  const MenuDrawer = () => (
    <Drawer open={isOpen} onClose={handleClose} >
      <Box>
        <Grid container direction="column" rowSpacing={2}>
          <Grid item width="100%">
            <Grid container direction="row" p={1} alignItems="center">
              <Grid item ml={2}>
                <Logo logoData={logo} isOpen={isOpen} />
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
            <NavIcons iconsData={icons} />
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
            <Logo logoData={logo} />
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
