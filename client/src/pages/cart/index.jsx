import React from 'react'
import { Box, Typography, Grid, Link as MuiLink, styled, Card, CardMedia, CardActions, CardContent, Button } from "@mui/material"
import { shades } from '~/utils/theme'
import { Link as RouterLink } from "react-router-dom"
import images1 from "~/assets/images/simas_mo_W1_Kjxb_N_Tg_unsplash_de9a2e2482.jpg"
import { useFetcher } from '~/utils/'
import FetchServices from "~/services/ecommmerce.service.js"

const Cart = () => {
  const { data } = useFetcher(FetchServices.getAllData)
  console.log(data)

  return (
    <Box mt={2}>
      <Grid container rowSpacing={2} columnSpacing={2}>
        {data?.map(item => {
          const { id, attributes: { category, price, title, image: { attributes: url, formats: { small: height, width } } } } = item
          console.log(id, category, price, title, url, height, width)
          return (
            <Grid item>
              <Card raised={true}>
                <CardMedia image={images1} title="dsf" sx={{ height: 200 }} />
                <CardContent>
                  <Typography variant="title" >
                    item category
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography variant="subtitle" sx={{ color: shades.sco[300] }}>
                    item name
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="outlined">add to cart</Button>
                  <Button>show details</Button>
                </CardActions>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Box >
  )
}

export default Cart
