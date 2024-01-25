import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <Card sx={{ textAlign: "center" }}>
      <CardMedia
        sx={{ height: 300, width: 300, margin: "auto" }}
        image="/images/artist.JPG"
        title="Chris Verges"
      />
      <CardContent>
        <Typography sx={{ marginBottom: 2 }} variant="body2" color="text.secondary">
        I'm so glad you made it here! My name is Chris and I am a developer
          based out of Phoenix, Arizona. I began my web developement journey in March of 2023 and graduated from the
          University of Arizona's Full Stack Web Design and Software Development
          Bootcamp on September 5th.  
        </Typography>
        <Typography sx={{ marginBottom: 2 }} variant="body2" color="text.secondary">
        I am seeking a job in developement and as a diligent worker, eager learner and consumate professional will be able to positively impact a company immediately.
        </Typography>
        <Typography variant="body2" color="text.secondary">
        If I am not developing software you can expect to find me outside enjoying Arizona's vast trail system. As an avid hiker and landscape artist the outdoors are where I feel most at home and I love spending time put miles under my feet and then painting the beautiful sights I have seen.
        </Typography>
      </CardContent>
    </Card>
  );
}
