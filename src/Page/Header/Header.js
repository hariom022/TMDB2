import { AppBar, Box, Button, Container, Drawer, Toolbar } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.scss";
import SegmentIcon from "@mui/icons-material/Segment";
const Header = () => {
  const [moblieOpen, setMobileOpen] = useState(false);

  const menuButtonHandler = () => {
    setMobileOpen(!moblieOpen);
  };

  const drawer = (
    <Box onClick={menuButtonHandler}>
      <div className="menu-item-nav">
        <ul>
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
      </div>
    </Box>
  );
  return (
    <Box>
      <AppBar
        sx={{ bgcolor: "#09143C ", position: "relative" }}
        component={"nav"}
      >
        <Container sx={{ display: { sx: "none", sm: "block" } }}>
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
                <div className="img-tag">
                  <img src="img-main.svg" alt="" />
                </div>
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
            <div className="menu-button" onClick={menuButtonHandler}>
              <img src="img-main.svg" alt="" style={{ height: "22px" }} />
              <SegmentIcon />
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component={"nav"}>
        <Drawer
          open={moblieOpen}
          onClose={setMobileOpen}
          variant="permanent"
          component={"nav"}
          sx={{
            display: { xs: "block", sm: "none" },
            textAlign: "center",
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};
export default Header;
