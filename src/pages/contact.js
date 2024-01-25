import React from "react";
import ContactCard from "../components/ContactCard";
import { Container } from "@mui/system";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";

const Contact = () => {
  return (
    <Container sx={{ mt: 1}}>
      <Card>
        <CardHeader
          title="Contact Chris"
          subheader="Connect with Chris for inquiries, collaborations, or just to say hello"
          titleTypographyProps={{ align: "center" }}
          subheaderTypographyProps={{
            align: "center",
          }}
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[700],
          }}
        />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ContactCard />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Contact;