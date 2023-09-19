import { Box, Typography, TextField, Button } from "@mui/material";
import React from "react";
import "./Banner.scss";
import Img from "../Image/img3.jpg";

const Banner = () => {
  return (
    <div className="banner-Image">
      <Box sx={{ pt: "80px" }}>
        <Typography
          sx={{
            textAlign: "start",
            marginLeft: "70px",
            color: "white",
            fontSize: "60px",
            fontweight: "bold",
          }}
          variant="h3"
        >
          Welcome .
        </Typography>
        <Typography
          sx={{
            textAlign: "start",
            marginLeft: "70px",
            color: "white",
            fontSize: "24px",
            fontWeight: "800",
          }}
          variant="h6"
        >
          Millions of movies, TV shows and people to discover. Explore now.
        </Typography>
        <div className="input-box">
          <TextField placeholder="Search for movie ,tv Show,persion..." />
          <Button
            variant="contained"
            sx={{
              height: "48px",
              borderRadius: "37px",
              background: "linear-gradient(to right, #32cd32 , #2edaff)",
              "@media (max-width:900px)": { height: "36px" },
            }}
          >
            Search
          </Button>
        </div>
      </Box>
    </div>
  );
};
export default Banner;
