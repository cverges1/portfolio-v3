import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/system/Unstable_Grid/Grid";
import Example1 from "../components/Work/Example1";
import Example2 from "../components/Work/Example2";
import Example3 from "../components/Work/Example3";

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
      </Box>
      <Grid container spacing={2} justifyContent="center" margin={5}>
        <Grid lg={8}>
          <Example1 />
        </Grid>
        <Grid lg={8}>
          <Example2 />
        </Grid>
        <Grid lg={8}>
          <Example3 />
        </Grid>
      </Grid>
    </Box>
  );
}
