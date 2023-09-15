const initialState = {
  weekData: [],
};

const TrendingWeekReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "TRENDING_WEEK": {
      return {
        ...state,
        weekData: [state.weekData, ...action.payload],
      };
    }
    default:
      return state;
  }
};
export default TrendingWeekReducer;
