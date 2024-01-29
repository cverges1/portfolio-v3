import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

export default function StickyFooter() {
  return (
    <Grid container justifyContent="center">
      <Typography variant="body2" color="whitesmoke">
        <Link color="inherit" href="https://github.com/cverges1">
          Github
        </Link>{" "}
        <Link color="inherit" href="https://linkedin.com/in/chris-verges">
          LinkedIn
        </Link>{" "}
        {new Date().getFullYear()}
      </Typography>
    </Grid>
  );
}
