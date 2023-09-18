import React from "react";
import { useSelector } from "react-redux";
import "./TrendingWeeks.scss";
import OwlCarousel from "react-owl-carousel";

const TrendingWeeks = () => {
  const weeksNewData = useSelector(
    (state) => state.TrendingWeekReducer.weekData
  );
  console.log("weeksNewData", weeksNewData);
  return (
    <div className="weeks-container">
      <div className="weeks">
        <OwlCarousel
          className="owl-theme"
          items={20}
          loop
          nav={false}
          dots={false}
          // margin={15}
        >
          {weeksNewData.map((item, index) => {
            return (
              <div>
                <img
                  width={150}
                  height={250}
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  alt=""
                />
                <p className="vote">{item.vote_average}</p>
                <p className="title">{item.title}</p>
              </div>
            );
          })}
        </OwlCarousel>
      </div>
    </div>
  );
};
export default TrendingWeeks;
