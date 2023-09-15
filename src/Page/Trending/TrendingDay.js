import React from "react";
import { useSelector } from "react-redux";
import OwlCarousel from "react-owl-carousel";
import "./TrendingDay.scss";

const TrendingDay = () => {
  const dayTrending = useSelector((state) => state.TrendingDayReducer.dayData);
  // console.log(dayTrending);

  return (
    <div className="day-container">
      <div className="day">
        <OwlCarousel
          className="owl-theme"
          items={20}
          loop
          nav={false}
          dots={false}
          // margin={15}
        >
          {dayTrending.map((item, index) => {
            return (
              <div>
                <img
                  width={150}
                  height={250}
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  alt=""
                />
                <p>{item.title}</p>
              </div>
            );
          })}
        </OwlCarousel>
      </div>
    </div>
  );
};
export default TrendingDay;
