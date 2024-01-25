import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { CardHeader } from "@mui/material";
import { Link } from "react-router-dom";

export default function Example1() {
  return (
    <>
      <Card>
        <CardHeader
          title={
            <Typography variant="h4" align="center">
              Personal Art Store
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
          alt="Home page of personal art website"
          sx={{ maxHeight: 800 }}
          src={`/images/siteImages/art-store.jpeg`}
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
              The Personal Art Store is a labor of love, reflecting both my
              artistic vision and technical expertise. This bespoke e-commerce
              site, developed as a personal passion project, showcases my
              original artwork and utilizes the robust MERN Stack with the
              integration of GraphQL. Each stroke of creativity and line of code
              embodies my dedication to craftsmanship. The challenge was to
              construct a fully functional e-commerce platform, providing a
              canvas for my art to reach a broader audience. Visit my
              Art Store to experience the blend of art and technology in my life.
            </Typography>
            <Typography
              variant="subtitle"
              color="text.secondary"
              component="div"
              textAlign={"center"}
            >
              <Link
                to="https://chrisvergesart-a007f39ad1a3.herokuapp.com/"
                style={{ textDecoration: "underline", color: "#666666" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here to visit the Personal Art Store
              </Link>
            </Typography>
            <Typography
              variant="subtitle"
              color="text.secondary"
              component="div"
              textAlign={"center"}
            >
              <Link
                to="https://github.com/cverges1/art-store"
                style={{ textDecoration: "underline", color: "#666666" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here to visit the Personal Art Store's Github Repository
              </Link>
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </>
  );
}
