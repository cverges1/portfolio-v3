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
        color: "white",
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
        color: "white",
      }}
      onClick={onClick}
    >
      <ArrowBackIos />
    </div>
  );
};

export default function Example5() {
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
              Verified Reality
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
                src={`${process.env.PUBLIC_URL}/images/siteImages/verifiedReality/homepage.png`}
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
                src={`${process.env.PUBLIC_URL}/images/siteImages/verifiedReality/services.png`}
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
                src={`${process.env.PUBLIC_URL}/images/siteImages/verifiedReality/who-we-are.png`}
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
                src={`${process.env.PUBLIC_URL}/images/siteImages/verifiedReality/contact-us.png`}
                alt="commissions page"
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
                src={`${process.env.PUBLIC_URL}/images/siteImages/verifiedReality/get-a-quote.png`}
                alt="prints page"
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
              This is the Verified Reality React web application, designed to
              showcase the company’s services, projects, and market expertise.
              The app is built with React, Material UI (MUI), and React Router,
              and incorporates modern web development practices such as
              lazy-loading, route-based code splitting, and optimized image
              loading for improved performance. The goal of this project was to
              give Verified Reality a modern, professional website to attract
              new customers, showcase their services and past projects, and
              provide an easy way for clients to request quotes and get in
              touch.
            </Typography>
            <Typography variant="subtitle" component="div" textAlign={"center"}>
              <Link
                to="https://www.trulyvr.com/"
                style={{
                  textDecoration: "underline",
                  fontWeight: "bold",
                  color: "black",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here to visit Verified Reality
              </Link>
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </>
  );
}
