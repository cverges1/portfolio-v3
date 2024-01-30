import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { CardHeader } from "@mui/material";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

// Define NextArrow and PrevArrow components outside of Example1 component
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow"
      style={{ right: "0", top: "50%", transform: "translateY(-50%)", zIndex: 1, position: "absolute" }}
      onClick={onClick}
    >
      <ArrowForwardIos />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow"
      style={{ left: "0", top: "50%", transform: "translateY(-50%)", zIndex: 1, position: "absolute" }}
      onClick={onClick}
    >
      <ArrowBackIos />
    </div>
  );
};


export default function Example1() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Card>
      <CardHeader
        title={
          <Typography variant="h4" align="center">
            Personal Art Store
          </Typography>
        }
        titleTypographyProps={{ align: "center" }}
        sx={{
          backgroundColor: "#666666",
          opacity: 0.9,
        }}
      />
      <Box>
        <Slider {...settings}>
          <div>
            <img src={`${process.env.PUBLIC_URL}/images/siteImages/artStore/art-store.jpeg`} alt="homepage" style={{ display: "block", margin: "auto", maxWidth: "100%", maxHeight: "800px" }} />
          </div>
          <div>
            <img src={`${process.env.PUBLIC_URL}/images/siteImages/artStore/originals.png`} alt="originals page" style={{ display: "block", margin: "auto", maxWidth: "100%", maxHeight: "800px" }} />
          </div>
          <div>
            <img src={`${process.env.PUBLIC_URL}/images/siteImages/artStore/prints.png`} alt="prints page" style={{ display: "block", margin: "auto", maxWidth: "100%", maxHeight: "800px" }} />
          </div>
          <div>
            <img src={`${process.env.PUBLIC_URL}/images/siteImages/artStore/commissions.png`} alt="commissions page" style={{ display: "block", margin: "auto", maxWidth: "100%", maxHeight: "800px" }} />
          </div>
          <div>
            <img src={`${process.env.PUBLIC_URL}/images/siteImages/artStore/cart.png`} alt="page with items added to the cart" style={{ display: "block", margin: "auto", maxWidth: "100%", maxHeight: "800px" }} />
          </div>
        </Slider>
        <CardContent
          sx={{
            backgroundColor: "#666666",
            opacity: 0.9,
          }}
        >
          <Typography
            variant="subtitle"
            component="div"
            textAlign={"center"}
          >
            The Personal Art Store is a labor of love, reflecting both my
            artistic vision and technical expertise. This bespoke e-commerce
            site, developed as a personal passion project, showcases my
            original artwork and utilizes the robust MERN Stack with the
            integration of GraphQL. Each stroke of creativity and line of code
            embodies my dedication to craftsmanship. The challenge was to
            construct a fully functional e-commerce platform, providing a
            canvas for my art to reach a broader audience. Visit my Art Store
            to experience the blend of art and technology in my life.
          </Typography>
          <Typography
            variant="subtitle"
            component="div"
            textAlign={"center"}
          >
            <Link
              to="https://chrisvergesart-a007f39ad1a3.herokuapp.com/"
              style={{ textDecoration: "underline", fontWeight: "bold" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Click Here to visit the Personal Art Store
            </Link>
          </Typography>
          <Typography
            variant="subtitle"
            component="div"
            textAlign={"center"}
          >
            <Link
              to="https://github.com/cverges1/art-store"
              style={{ textDecoration: "underline", fontWeight: "bold" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Click Here to visit the Personal Art Store's Github Repository
            </Link>
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
