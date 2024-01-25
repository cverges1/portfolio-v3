import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { CardHeader } from "@mui/material";
import { Link } from "react-router-dom";

export default function Example3() {
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
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[700],
          }}
        />
        <CardMedia
          component="img"
          alt="Home page of City Capers Travel Guide"
          sx={{ maxHeight: 800 }}
          src={`/images/siteImages/city-capers.jpeg`}
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
Application provides users with things to do in any city. Users enter a city and date and are provided with events happening, restaurants to go to and other points of interest. Uses HTML, CSS, JavaScript and uses Ticketmaster and GeoApify APIs to fetch data. Created with three other developers.
            </Typography>
            <Typography
              variant="subtitle"
              color="text.secondary"
              component="div"
              textAlign={"center"}
            >
              <Link
                to="https://alugo0823.github.io/travel-guide-api/"
                style={{ textDecoration: "underline", color: "#666666" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here to visit City Capers
              </Link>
            </Typography>
            <Typography
              variant="subtitle"
              color="text.secondary"
              component="div"
              textAlign={"center"}
            >
              <Link
                to="https://github.com/ALugo0823/travel-guide-api"
                style={{ textDecoration: "underline", color: "#666666" }}
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
