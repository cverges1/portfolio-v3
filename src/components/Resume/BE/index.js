import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { CardHeader } from "@mui/material";

export default function BE() {
    return(
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
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[700],
          }}
          />
        </Card>
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
              component="p"
              textAlign={"center"}
            >
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
    )
}