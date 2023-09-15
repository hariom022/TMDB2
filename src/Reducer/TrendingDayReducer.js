const initialState = {
  dayData: [],
};

const TrendingDayReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TRENDING_DAY": {
      return {
        ...state,
        dayData: [state.dayData, ...action.payload],
      };
    }

    default:
      return state;
  }
};
export default TrendingDayReducer;
