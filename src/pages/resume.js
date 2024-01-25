import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/system/Unstable_Grid/Grid";
import FE from '../components/Resume/FE';
import BE from '../components/Resume/BE';

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
                <Typography>
                    <h1>Resume</h1>
                </Typography>
            </Box>
            <Box                 sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    borderColor: "divider",
                }}>
            <div className="skills">
                        <p>
                            Download my <a href="https://profile.indeed.com/document/view">resume</a>
                        </p>
                    </div>
            </Box>
            <Grid container justifyContent="center" margin={5} spacing={2}>

                    <Grid item lg={6}  justifyContent="center" spacing={2}>
                        <FE />
                    </Grid>
                    <Grid item lg={6}  justifyContent="center" spacing={2}>
                        <BE />
                    </Grid>
                </Grid>
        </Box>
    );
};

export default Resume;
