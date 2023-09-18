import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.scss";
const Header = () => {
  return (
    <AppBar sx={{ bgcolor: "#09143C ", position: "relative" }}>
      <Container>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: 0,
            paddingRight: 0,
          }}
        >
          <ul>
            <li>
              <img src="img-main.svg" alt="" style={{ height: "22px" }} />
            </li>

            <li>Movies</li>
            <li>TV Shows</li>
            <li>People</li>
            <li>More</li>
          </ul>
          <ul>
            <li>
              <Button
                variant="outlined"
                sx={{ color: "white", border: "2px solid white", p: "0px" }}
              >
                EN
              </Button>
            </li>
            <li>Login</li>
            <li>Join TMDB</li>
            <li>
              <SearchIcon />
            </li>
          </ul>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
