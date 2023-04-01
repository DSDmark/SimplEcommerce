import { Box, Typography, styled } from "@mui/material"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader,
import image1 from "~/assets/images/simas_mo_W1_Kjxb_N_Tg_unsplash_de9a2e2482.jpg"
import { useFetcher } from "~/utils/";
import FetchServices from "../services/ecommmerce.service.js"

const CarouselImg = styled("img")(({ theme }) => ({
  height: "400px",
  width: "100%",
  objectFit: "cover",
  backgroundAttachment: "fixed",
}))

const ImgCaption = styled(Box)(({ theme }) => ({
  color: "white",
  position: "absolute",
  top: "40%",
  padding: theme.spacing(2, 4),
  left: "10%",
  background: "rgb(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
}))

const MainCarousel = () => {
  const data = useFetcher(FetchServices.getAllData(""))

  console.log(data)
  return (
    <Carousel infiniteLoop={true} showArrows={false} showThumbs={false} showStatus={false} showIndicators={false}>
      <Box>
        <CarouselImg src={image1} />
        <ImgCaption>
          <Typography variant="subtitle">
            sdfa
          </Typography>
          <Typography mt={2} variant="title">
            new arrivals
          </Typography>
          <Typography mt={2} variant="caption">
            new arrivals
          </Typography>
        </ImgCaption>
      </Box>
    </Carousel>
  )
}

export default MainCarousel
