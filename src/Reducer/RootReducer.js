import { combineReducers } from "redux";
import TrendingDayReducer from "./TrendingDayReducer";
import TrendingWeekReducer from "./TrendingweekReducer";

const RootReducer = combineReducers({
  TrendingDayReducer: TrendingDayReducer,
  TrendingWeekReducer: TrendingWeekReducer,
});

export default RootReducer;
