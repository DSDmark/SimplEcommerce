import React from 'react'
import { Grid, Box, Typography, styled } from "@mui/material"
import { shades } from '~/utils/theme';

const Footer = () => {

  const footerData = ["websiteLogo", "aboutus", "contact", "prievy"];
  const FooterStyle = styled(Grid)(({ theme }) => ({
    background: shades.pri[400],
    padding: theme.spacing(5),
    color: shades.sco[200],
  }))

  return (
    <Box>
      <Grid container mt={5} rowSpacing={2}>
        {footerData.map((item) => {
          return (
            <FooterStyle itme>
              <Typography variant="subtitle1">
                {item}
              </Typography>
            </FooterStyle>
          )
        })}
      </Grid>
    </Box>
  )
}

export default Footer
