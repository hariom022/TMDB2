import React, { useEffect } from "react";
import Header from "../Page/Header/Header";
import Banner from "../Page/Banner/Banner";
import Trending from "../Page/Trending/Trending";
import { trendingDay, trendingWeeks } from "../ApiCalls";
import { useDispatch } from "react-redux";
import { options, API_KEY, base_URL } from "../Utils";

const HomePage = () => {
  const dispatch = useDispatch();

  const trendingDayData = () => {
    trendingDay().then((data) => {
      dispatch({ type: "TRENDING_DAY", payload: data.results });
    });
  };

  const trendingWeeksData = () => {
    trendingWeeks().then((data) => {
      dispatch({ type: "TRENDING_WEEK", payload: data.results });
    });
  };

  useEffect(() => {
    trendingDayData();
  }, []);

  return (
    <div>
      <Header />
      <Banner />
      <Trending
        trendingDayData={trendingDayData}
        trendingWeeksData={trendingWeeksData}
      />
    </div>
  );
};
export default HomePage;
