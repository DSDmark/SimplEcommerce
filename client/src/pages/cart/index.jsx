import React, { useCallback } from 'react'
import { Box, Typography, Grid, Link as MuiLink, styled, Card, CardMedia, CardActions, CardContent, Button } from "@mui/material"
import { shades } from '~/utils/theme'
import { Link as RouterLink } from "react-router-dom"
import { useFetcher } from '~/utils/'
import FetchServices from "~/services/ecommmerce.service.js"
import { useState } from 'react'

const Cart = () => {
  const { data } = useFetcher(FetchServices.getAllData)
  const BASE_URL = import.meta.env.VITE_BASE_URL
  const [toggleRaise, setRaise] = useState(false)

  const handleMouseOver = useCallback(() => {
    setRaise(() => true);
  }, []);

  const handleMouseOut = useCallback(() => {
    setRaise(() => false);
  }, []);

  return (
    <Box mt={2}>
      <Grid container rowSpacing={2} columnSpacing={2}>
        {data?.map(item => {
          const { id, attributes: { title, category, price, image: { data: { attributes: { url } } } }
          } = item
          return (
            <Grid item key={id}>
              <Card sx={{ "&:hover": { boxShadow: "1px 3px 9px #000" } }}>
                <CardMedia image={BASE_URL + url} title={title} sx={{ height: 400, width: 400 }} />
                <CardContent>
                  <Typography variant="title" >
                    {title}
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography variant="subtitle" sx={{ color: shades.sco[300] }}>
                    {category}
                  </Typography>
                </CardContent>
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

export default Cart
