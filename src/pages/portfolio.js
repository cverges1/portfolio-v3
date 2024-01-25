import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/system/Unstable_Grid/Grid";
import Card from "@mui/material/Card";
import Work from "../components/Work/Example1";

export default function Portfolio() {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          borderColor: "divider",
        }}
      >
        <Typography>
          <h1>Portfolio</h1>
        </Typography>
      </Box>
      <Grid container spacing={2} justifyContent="center" margin={5}>
        <Grid item lg={6}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[200]
                  : theme.palette.grey[700],
            }}
          >
            <Work />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
