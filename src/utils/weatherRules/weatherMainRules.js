const weatherMainRules = [
  {
    main: "Clear",
    message: "맑음",
    weatherImage: "assets/weatherImg/sunny.webp",
  },
  {
    main: "Clouds",
    message: "구름",
    weatherImage: "assets/weatherImg/cloudy.webp",
  },
  { main: "Rain", message: "비", weatherImage: "assets/weatherImg/rain.webp" },
  {
    main: "Drizzle",
    message: "이슬비",
    weatherImage: "assets/weatherImg/rain.webp",
  },
  { main: "Snow", message: "눈", weatherImage: "assets/weatherImg/snow.webp" },
  {
    main: "Thunderstorm",
    message: "천둥⚡️번개",
    imagweatherImagee: "assets/weatherImg/thunderstorm.webp",
  },
  {
    main: "Mist",
    message: "안개",
    weatherImage: "assets/weatherImg/Lfog.webp",
  },
  {
    main: "Haze",
    message: "옅은안개",
    weatherImage: "assets/weatherImg/Lfog.webp",
  },
  {
    main: "Fog",
    message: "짙은안개",
    weatherImage: "assets/weatherImg/Wfog.webp",
  },
  {
    main: "Dust",
    message: "미세먼지",
    weatherImage: "assets/weatherImg/dust.webp",
  },
  {
    main: "Sand",
    message: "황사",
    weatherImage: "assets/weatherImg/dust.webp",
  },
  {
    main: "Ash",
    message: "화산재❗️",
    weatherImage: "assets/weatherImg/ash.webp",
  },
  {
    main: "Squall",
    message: "둘풍❗️",
    weatherImage: "assets/weatherImg/squall.webp",
  },
  {
    main: "Tornado",
    message: "토네이도❗️",
    weatherImage: "assets/storm.webp",
  },
];

export const getWeatherMainMessage = (weatherMainArray) => {
  for (const { main, message, weatherImage } of weatherMainRules) {
    if (weatherMainArray.includes(main)) {
      return { message, weatherImage };
    }
  }
  return { message: null };
};
