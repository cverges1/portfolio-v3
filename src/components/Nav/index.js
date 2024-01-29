import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const handleTabClick = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        paddingX: 2,
        alignItems: "center",
      }}
    >
<Box
  sx={{
    width: "100%",
    display: "flex",
    justifyContent: "center",
  }}
>
  <Tabs
    value={value}
    onChange={(event, newValue) => handleTabClick(event, newValue)}
    aria-label="basic tabs example"
    sx={{
      "& .MuiTabs-indicator": { display: "none" },
      width: "100%",
      maxWidth: "600px", // Set a maximum width if needed
    }}
  >
    <Tab
      label="About"
      component={Link}
      to="/about"
      onClick={(event) => handleTabClick(event, 0)}
      sx={{ color: "black", flex: 1 }}
      {...a11yProps(0)}
    />
    <Tab
      label="Portfolio"
      component={Link}
      to="/portfolio"
      onClick={(event) => handleTabClick(event, 1)}
      sx={{ color: "black", flex: 1 }}
      {...a11yProps(1)}
    />
    <Tab
      label="Resume"
      component={Link}
      to="/resume"
      onClick={(event) => handleTabClick(event, 2)}
      sx={{ color: "black", flex: 1 }}
      {...a11yProps(2)}
    />
        <Tab
      label="Contact"
      component={Link}
      to="/contact"
      onClick={(event) => handleTabClick(event, 3)}
      sx={{ color: "black", flex: 1 }}
      {...a11yProps(3)}
    />
  </Tabs>
</Box>

    </Box>
  );
}