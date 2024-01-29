import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { CardHeader } from "@mui/material";

export default function FE() {
  return (
    <>
      <Card>
        <CardHeader
          title={
            <Typography variant="h4" align="center">
              Front End Proficiencies
            </Typography>
          }
          titleTypographyProps={{ align: "center" }}
          sx={{
            color: "whitesmoke",
            backgroundColor: "#666666",
            opacity: 0.85,
          }}
        />
      </Card>
      <Box>
        <CardContent
          sx={{
            color: "whitesmoke",
            backgroundColor: "#666666",
            opacity: 0.85,
          }}
        >
          <Typography component="p" textAlign={"center"}>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>jQuery</p>
            <p>Responsive Design</p>
            <p>React</p>
            <p>Bootstrap</p>
            <p>MUI</p>
          </Typography>
        </CardContent>
      </Box>
    </>
  );
}
