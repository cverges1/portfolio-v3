import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/system/Unstable_Grid/Grid";
import FE from "../components/Resume/FE";
import BE from "../components/Resume/BE";

const Resume = () => {
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
        <Typography variant='h6'>
        <h5>
            Download my{" "}
            <a href="https://profile.indeed.com/document/view">Resume</a>
          </h5>
        </Typography>
      </Box>
      <Grid container justifyContent="center" margin={5} spacing={2}>
        <Grid item lg={6} justifyContent="center" spacing={2}>
          <FE />
        </Grid>
        <Grid item lg={6} justifyContent="center" spacing={2}>
          <BE />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Resume;
