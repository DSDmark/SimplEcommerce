import { Box, Typography, styled, IconButton, useMediaQuery } from "@mui/material"
import { Carousel } from "react-responsive-carousel"
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useFetcher } from "~/utils/";
import FetchServices from "../services/ecommmerce.service.js"
import { useNavigate } from "react-router-dom";
import { shades } from "~/utils/theme.js";

const CarouselImg = styled("img")(({ theme }) => ({
  height: "400px",
  width: "100%",
  objectFit: "cover",
  position: "relative",
  backgroundAttachment: "fixed",
}))

const ImgCaption = styled(Box)(({ theme, ismoblie }) => ({
  color: "white",
  position: "absolute",
  top: "40%",
  padding: theme.spacing(2, 4),
  left: ismoblie ? "" : "10%",
  cursor: "pointer",
  background: `rgpa(${shades.pri[700]},0.5)`,
  display: "flex",
  width: ismoblie ? "100%" : "auto",
  justifyContent: "center",
  flexDirection: "column",
}))

const IconBtn = styled(IconButton)(({ theme }) => ({
  color: "white",
  position: "absolute",
  top: "50%",
  "&:hover": {
    background: "rgb(0,0,0,0.5)",
  },
  zIndex: theme.zIndex[0],
  display: "flex",
  justifyContent: "center",
}))

const MainCarousel = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
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

  return (
    <Carousel {...props}>
      {data?.map(item => {
        const { id, attributes: { title, category, image: { data: { attributes: { url, height, width, caption } } } } } = item;
        return (
          <Box key={id} >
            <CarouselImg height={height} width={width} src={BASE_URL + url} />
            <ImgCaption ismoblie={isMobile} onClick={() => hendleNavigate(category)}>
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
