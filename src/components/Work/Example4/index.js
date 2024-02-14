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
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

// Define NextArrow and PrevArrow components outside of Example4 component
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow"
      style={{
        right: "0",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
        position: "absolute",
      }}
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
      style={{
        left: "0",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
        position: "absolute",
      }}
      onClick={onClick}
    >
      <ArrowBackIos />
    </div>
  );
};

export default function Example4() {
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
              Pizza Store
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
              <img
                src={`${process.env.PUBLIC_URL}/images/siteImages/pizzaStore/home-with-data.png`}
                alt="homepage"
                style={{
                  display: "block",
                  margin: "auto",
                  maxWidth: "100%",
                  maxHeight: "800px",
                }}
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/siteImages/pizzaStore/home-nothing.png`}
                alt="originals page"
                style={{
                  display: "block",
                  margin: "auto",
                  maxWidth: "100%",
                  maxHeight: "800px",
                }}
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/siteImages/pizzaStore/create-topping.png`}
                alt="prints page"
                style={{
                  display: "block",
                  margin: "auto",
                  maxWidth: "100%",
                  maxHeight: "800px",
                }}
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/siteImages/pizzaStore/create-pizza.png`}
                alt="commissions page"
                style={{
                  display: "block",
                  margin: "auto",
                  maxWidth: "100%",
                  maxHeight: "800px",
                }}
              />
            </div>
          </Slider>
          <CardContent
            sx={{
              backgroundColor: "#666666",
              opacity: 0.9,
            }}
          >
            <Typography variant="subtitle" component="div" textAlign={"center"}>
              The Pizza Store is a robust MERN (MongoDB, Express.js, React.js,
              Node.js) application tailored for pizza store owners to
              efficiently manage toppings and pizzas. Crafted as a progressive
              web app, it seamlessly integrates a RESTful API to facilitate
              smooth operations.
            </Typography>
            <Typography variant="subtitle" component="div" textAlign={"center"}>
                Users can view, update and delete existing pizzas and toppings as well as create their own.
            </Typography>
            <Typography variant="subtitle" component="div" textAlign={"center"}>
              <Link
                to="https://pizza-store-9491a3c0ae7c.herokuapp.com/"
                style={{
                  textDecoration: "underline",
                  fontWeight: "bold",
                  color: "black",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here to visit the Pizza Store
              </Link>
            </Typography>
            <Typography variant="subtitle" component="div" textAlign={"center"}>
              <Link
                to="https://github.com/cverges1/pizza-store"
                style={{
                  textDecoration: "underline",
                  fontWeight: "bold",
                  color: "black",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here to visit the Pizza Store's Github Repository
              </Link>
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </>
  );
}
