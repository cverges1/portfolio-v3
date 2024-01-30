import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function Nav({ pages, currentPage, setCurrentPage }) {
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
          aria-label="basic tabs example"
          value={pages.indexOf(currentPage)}
          sx={{
            "& .MuiTabs-indicator": { display: "none" },
            justifyContent: "center", // Center the tabs horizontally
          }}
        >
          {pages.map((page) => (
            <Tab key={page} label={page} onClick={() => setCurrentPage(page)} sx={{ color: "black" }} />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
}

export default Nav;
