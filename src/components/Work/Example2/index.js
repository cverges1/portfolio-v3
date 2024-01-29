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

export default function Example2() {
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
    <>
      <Card>
        <CardHeader
          title={
            <Typography variant="h4" align="center">
              Happy Tails Pet Supply Store
            </Typography>
          }
          titleTypographyProps={{ align: "center" }}
          sx={{
            backgroundColor: "#666666",
            opacity: 0.85,
            color: "whitesmoke"
          }}
        />
        <Box>
        <Slider {...settings}>
          <div>
            <img src={`/images/siteImages/happyTails/happy-tails.jpeg`} alt="homepage" style={{ display: "block", margin: "auto", maxWidth: "100%", maxHeight: "800px" }} />
          </div>
          <div>
            <img src={`/images/siteImages/happyTails/category.png`} alt="category page" style={{ display: "block", margin: "auto", maxWidth: "100%", maxHeight: "800px" }} />
          </div>
          <div>
            <img src={`/images/siteImages/happyTails/single-prod.png`} alt="single product page" style={{ display: "block", margin: "auto", maxWidth: "100%", maxHeight: "800px" }} />
          </div>
          <div>
            <img src={`/images/siteImages/happyTails/login.png`} alt="login page" style={{ display: "block", margin: "auto", maxWidth: "100%", maxHeight: "800px" }} />
          </div>
          <div>
            <img src={`/images/siteImages/happyTails/signup-page.png`} alt="signup page" style={{ display: "block", margin: "auto", maxWidth: "100%", maxHeight: "800px" }} />
          </div>
        </Slider>
          <CardContent
            sx={{
              backgroundColor: "#666666",
              opacity: 0.85,
            }}
          >
            <Typography
              variant="subtitle"
              color="whitesmoke"
              component="div"
              textAlign={"center"}
            >
              Happy Tails Pets Supply Store is a collaborative effort between
              myself and three skilled developers, marking the culmination of
              the University of Arizona's Full Stack Web and Software
              Development Bootcamp. This sophisticated e-commerce platform is a
              testament to our shared passion for pets and our commitment to
              creating a significant impact in the ever-expanding realm of
              e-commerce. Meticulously designed and developed, Happy Tails Pets
              Supply offers a seamless shopping experience for pet enthusiasts,
              combining functionality with a user-centric approach.{" "}
            </Typography>
            <Typography
              variant="subtitle"
              color="whitesmoke"
              component="div"
              textAlign={"center"}
            >
              <Link
                to="https://morning-mesa-14358-6466ec7ce729.herokuapp.com/"
                style={{ textDecoration: "underline", color: "whitesmoke", fontWeight: "bold" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here to visit Happy Tails Pet Supply Store
              </Link>
            </Typography>
            <Typography
              variant="subtitle"
              color="text.secondary"
              component="div"
              textAlign={"center"}
            >
              <Link
                to="https://github.com/cverges1/ecommerce-store-v2"
                style={{ textDecoration: "underline", color: "whitesmoke", fontWeight: "bold" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here to visit the Happy Tails Pet Supply Store's Github
                Repository
              </Link>
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </>
  );
}
