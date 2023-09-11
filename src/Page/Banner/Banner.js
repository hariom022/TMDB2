import { Box, Typography, TextField, Button } from "@mui/material";
import React from "react";
import "./Banner.scss";
import Img from "../Image/img3.jpg";

const Banner = () => {
  return (
    <div className="banner-Image">
      <Box sx={{ padding: "145px 0px 0px 0px" }}>
        <Typography>Welcome .</Typography>
        <Typography>
          Millions of movies, TV shows and people to discover. Explore now.
        </Typography>
        <div className="input-box">
          <TextField placeholder="Search for movie ,tv Show,persion..." />
          <Button
            variant="contained"
            sx={{ height: "48px", borderRadius: "37px" }}
          >
            Search
          </Button>
        </div>
      </Box>
    </div>
  );
};
export default Banner;
