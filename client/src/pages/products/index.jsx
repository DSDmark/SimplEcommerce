import React from 'react'
import { Box, Typography, Grid, Link as MuiLink, styled, Card, CardMedia, CardActions, CardContent, Button } from "@mui/material"
import { shades } from '~/utils/theme'
import { useFetcher } from '~/utils/'
import FetchServices from "~/services/ecommmerce.service.js"
import { Link as RouterLink } from "react-router-dom"

const ImgCard = styled(CardMedia)(({ theme }) => ({
  height: "400px",
  width: "100%",
  borderRadius: "6px",
  [theme.breakpoints.down("sm")]: {
    height: "300px",
    width: "100%",
  }
}))

const Products = () => {
  const { data } = useFetcher(FetchServices.getAllData)
  const BASE_URL = import.meta.env.VITE_BASE_URL

  return (
    <Box sx={{ margin: "2rem 1rem" }} >
      <Grid container rowSpacing={2} columnSpacing={2}>
        {data?.map(item => {
          const { id, attributes: { title, category, price, image: { data: { attributes: { url } } } }
          } = item
          return (
            <Grid item key={id} xs={12} md={4}>
              <Card sx={{
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                transition: "boxShadow 0.3s ease-in-out",
                "&:hover": {
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.12)",
                }, padding: ".5rem",

              }} >
                <MuiLink component={RouterLink} to={`/singleproduct/=${id}`}>
                  <ImgCard image={BASE_URL + url} title={title} />
                  <CardContent >
                    <Typography variant="title" >
                      {title}
                    </Typography>

                    <br />
                    <Typography variant="subtitle" sx={{ color: shades.sco[300] }}>
                      {category}
                    </Typography>
                  </CardContent>
                </MuiLink>
                <CardActions>
                  <Button variant="outlined">add to cart</Button>
                  <Button>${price}</Button>
                </CardActions>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Box >
  )
}

export default Products 
