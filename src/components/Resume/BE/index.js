import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { CardHeader } from "@mui/material";

export default function BE() {
  return (
    <>
      <Card>
        <CardHeader
          title={
            <Typography variant="h4" align="center">
              Back End Proficiencies
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
            backgroundColor: "#666666",
            opacity: 0.85,
          }}
        >
          <Typography component="p" textAlign={"center"} sx={{color: "whitesmoke"}}>
            <p>APIs</p>
            <p>Node</p>
            <p>Express</p>
            <p>MySQL, Sequelize</p>
            <p>MongoDB, Mongoose</p>
            <p>REST</p>
            <p>GraphQL</p>
          </Typography>
        </CardContent>
      </Box>
    </>
  );
}
