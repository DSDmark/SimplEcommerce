import React from 'react'
import { Box, Typography, Grid, Link as MuiLink, Paper, styled, Card, CardMedia, CardActions, CardContent, Button } from "@mui/material"
import { shades } from '~/utils/theme'
import { useFetcher } from '~/utils/'
import FetchServices from "~/services/ecommmerce.service.js"
import { Link as RouterLink, useParams } from "react-router-dom"

const ImgCard = styled(CardMedia)(({ theme }) => ({
  height: "auto",
  width: "500%",
  borderRadius: "6px",
  [theme.breakpoints.down("sm")]: {
    height: "300px",
    width: "100%",
  }
}))

const SingleProduct = () => {
  const { id } = useParams();
  const { data } = useFetcher(FetchServices.getById, id)
  console.log(data)
  const BASE_URL = import.meta.env.VITE_BASE_URL

  return (
    <Box sx={{ margin: "2rem 1rem" }} >
      <Grid container rowSpacing={2} columnSpacing={2}>
        {data?.map(item => {
          const { id, attributes: { title, category, price, description, image: { data: { attributes: { url } } } }
          } = item
          return (
            <Grid item key={id} >
              <Card sx={{
                display: "flex"
                , boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                transition: "boxShadow 0.3s ease-in-out",
                "&:hover": {
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.12)",
                }, padding: ".5rem",
              }} >
                <ImgCard xs={12} image={BASE_URL + url} title={title} />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent >
                    <Typography variant="title" >
                      {title}
                    </Typography>
                    <br />
                    <Typography variant="subtitle">
                      {category}
                    </Typography>
                    <br />
                    <Typography variant="caption" >
                      {description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="outlined">add to cart</Button>
                    <Button>${price}</Button>
                  </CardActions>
                </Box>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Box >
  )
}

export default SingleProduct

