import { API_KEY } from "./Utils";
import { options, base_URL } from "./Utils";

export const trendingDay = () => {
  return fetch(`${base_URL}/trending/movie/day?${API_KEY}`, options)
    .then((response) => response.json())
    .then((data) => data);
};

export const trendingWeeks = () => {
  return fetch(`${base_URL}/movie/now_playing?${API_KEY}`, options)
    .then((response) => response.json())
    .then((data) => data);
};
