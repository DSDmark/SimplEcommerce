import { Box, Typography, styled, IconButton, useMediaQuery } from "@mui/material"
import { Carousel } from "react-responsive-carousel"
import { alpha } from "@mui/material/styles"
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useFetcher } from "~/utils/";
import FetchServices from "../services/ecommmerce.service.js"
import { useNavigate } from "react-router-dom";
import { shades } from "~/utils/theme.js";

const backgroundColor = alpha(shades.pri[700], 0.4);

const CarouselImg = styled("img")({
  height: "400px",
  width: "100%",
  objectfit: "cover",
  position: "relative",
  backgroundattachment: "fixed",
})

const ImgCaption = styled(Box)(({ theme }) => ({
  color: "white",
  position: "absolute",
  top: "35%",
  width: "500px",
  padding: theme.spacing(2, 4),
  [theme.breakpoints.down("sm")]: {
    left: 0,
    width: "100%",
  },
  left: "10%",
  cursor: "pointer",
  backgroundColor,
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
}))

const IconBtn = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  "&:hover": {
    backgroundColor,
  },
  zIndex: theme.zIndex[0],
  display: "flex",
  justifyContent: "center",
}))

const MainCarousel = () => {
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_BASE_URL
  const { data } = useFetcher(FetchServices.getAllData, "bestseller")

  const hendleNavigate = (category) => {
    navigate(`/products/${category}`)
  }

  const props = {
    infiniteLoop: true,
    autoPlay: true,
    showArrows: false,
    showThumbs: false,
    showStatus: false,
    showIndicators: false,
    renderArrowNext: (e) => <IconBtn sx={{ right: 0 }} onClick={e}><ArrowForwardIos /></IconBtn>,
    renderArrowPrev: (e) => <IconBtn sx={{ left: 0 }} onClick={e}><ArrowBackIos /></IconBtn>
  }

  const ImgShower = (props) => {
    const isMoblie = useMediaQuery((theme) => theme.breakpoints.down("md"));
    return (
      <Box display="flex" flexDirection="row">
        {isMoblie ? (
          <CarouselImg {...props} />
        ) : (
          <>
            <CarouselImg {...props} />
            <CarouselImg sx={{ filter: " grayscale(100%) sepia(10%) hue-rotate(20deg)" }} {...props} />
          </>
        )}
      </Box>
    )
  }

  return (
    <Carousel {...props}>
      {data?.map(item => {
        const { id, attributes: { title, category, image: { data: { attributes: { url, height, width, caption } } } } } = item;
        return (
          <Box key={id} >
            <ImgShower height={height} width={width} src={BASE_URL + url} />
            <ImgCaption onClick={() => hendleNavigate(category)}>
              <Typography variant="subtitle">
                {title}
              </Typography>
              <Typography mt={2} variant="title">
                {category}
              </Typography>
              <Typography mt={2} variant="caption">
                {caption}
              </Typography>
            </ImgCaption>
          </Box>
        )
      })}
    </Carousel>
  )
}

export default MainCarousel
