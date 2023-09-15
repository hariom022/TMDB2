import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

import "./Trending.scss";
import TrendingDay from "./TrendingDay";
import TrendingWeeks from "./TrendingWeeks";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const Trending = (props) => {
  let { trendingDayData, trendingWeeksData } = props;

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="form-box">
      <p>Trending</p>
      <div className="button-box">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab
                  label="Today"
                  value="1"
                  onClick={() => trendingDayData()}
                />
                <Tab
                  label="This Week"
                  value="2"
                  onClick={() => trendingWeeksData()}
                />
              </TabList>
            </Box>
            <TabPanel value="1">
              {" "}
              <TrendingDay />
            </TabPanel>
            <TabPanel value="2">
              {" "}
              <TrendingWeeks />
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
};
export default Trending;
