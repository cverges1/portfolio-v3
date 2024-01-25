import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { CardHeader } from "@mui/material";
import { Link } from "react-router-dom";

export default function Example2() {
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
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[700],
          }}
        />
        <CardMedia
          component="img"
          alt="Home page of Happy Tails Pet Supply Store"
          sx={{ maxHeight: 800 }}
          src={`/images/siteImages/happy-tails.jpeg`}
        />
        <Box>
          <CardContent
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[200]
                  : theme.palette.grey[700],
            }}
          >
            <Typography
              variant="subtitle"
              color="text.secondary"
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
              color="text.secondary"
              component="div"
              textAlign={"center"}
            >
              <Link
                to="https://morning-mesa-14358-6466ec7ce729.herokuapp.com/"
                style={{ textDecoration: "underline", color: "#666666" }}
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
                style={{ textDecoration: "underline", color: "#666666" }}
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
