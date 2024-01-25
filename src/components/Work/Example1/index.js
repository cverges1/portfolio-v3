import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { CardHeader } from "@mui/material";
import { Link } from "react-router-dom";

export default function Work() {
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
              This example e-commerce site was developed as passion project for
              my art work. I wanted to challenge myself to build a fully
              functioning e-commerce site that I could one day sell my art on,
              if I ever decide to.
            </Typography>
            <Typography
              variant="subtitle"
              color="text.secondary"
              component="div"
              textAlign={"center"}
            >
              <Link
                href="https://chrisvergesart-a007f39ad1a3.herokuapp.com/"
                style={{ textDecoration: "underline", color: "#666666" }}
              >
                Click Here to visit the Personal Art Store
              </Link>{" "}
            </Typography>
            <Typography
              variant="subtitle"
              color="text.secondary"
              component="div"
              textAlign={"center"}
            >
              <Link
                href="https://github.com/cverges1/art-store"
                style={{ textDecoration: "underline", color: "#666666" }}
              >
                Click Here to visit the Personal Art Store Github Repository
              </Link>{" "}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </>
  );
}
