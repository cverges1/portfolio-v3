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

export default function Example3() {
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
              City Capers
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
            <img src={`${process.env.PUBLIC_URL}/images/siteImages/cityCapers/city-capers.jpeg`} alt="homepage" style={{ display: "block", margin: "auto", maxWidth: "100%", maxHeight: "800px" }} />
          </div>
          <div>
            <img src={`${process.env.PUBLIC_URL}/images/siteImages/cityCapers/featured-cities.png`} alt="originals page" style={{ display: "block", margin: "auto", maxWidth: "100%", maxHeight: "800px" }} />
          </div>
          <div>
            <img src={`${process.env.PUBLIC_URL}/images/siteImages/cityCapers/find-cities.png`} alt="prints page" style={{ display: "block", margin: "auto", maxWidth: "100%", maxHeight: "800px" }} />
          </div>
          <div>
            <img src={`${process.env.PUBLIC_URL}/images/siteImages/cityCapers/search1.png`} alt="commissions page" style={{ display: "block", margin: "auto", maxWidth: "100%", maxHeight: "800px" }} />
          </div>
          <div>
            <img src={`${process.env.PUBLIC_URL}/images/siteImages/cityCapers/search2.png`} alt="page with items added to the cart" style={{ display: "block", margin: "auto", maxWidth: "100%", maxHeight: "800px" }} />
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
              The application offers users a comprehensive guide to activities
              and attractions in any city of their choice. By inputting a
              specific city and date, users gain access to a curated list of
              upcoming events, recommended dining options, and notable points of
              interest. Leveraging a stack comprising HTML, CSS, and JavaScript,
              the application seamlessly integrates with Ticketmaster and
              GeoApify APIs, enabling real-time data retrieval for enhanced user
              experience. Developed collaboratively by a team of four
              experienced developers, this application embodies a commitment to
              delivering a seamless and informative city exploration platform.{" "}
            </Typography>
            <Typography
              variant="subtitle"
              component="div"
              textAlign={"center"}
            >
              <Link
                to="https://alugo0823.github.io/travel-guide-api/"
                style={{
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here to visit City Capers
              </Link>
            </Typography>
            <Typography
              variant="subtitle"
              component="div"
              textAlign={"center"}
            >
              <Link
                to="https://github.com/ALugo0823/travel-guide-api"
                style={{
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here to visit City Capers' Github Repository
              </Link>
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </>
  );
}
