const weatherMainRules = [
  {
    main: "Clear",
    message: "맑음",
    weatherImage: "assets/weatherImg/sunny.jpeg",
  },
  {
    main: "Clouds",
    message: "구름",
    weatherImage: "assets/weatherImg/cloud.jpeg",
  },
  { main: "Rain", message: "비", weatherImage: "assets/weatherImg/rain.jpeg" },
  {
    main: "Drizzle",
    message: "이슬비",
    weatherImage: "assets/weatherImg/rain.jpeg",
  },
  { main: "Snow", message: "눈", weatherImage: "assets/weatherImg/snow.jpeg" },
  {
    main: "Thunderstorm",
    message: "천둥⚡️번개",
    imagweatherImagee: "assets/weatherImg/Thunderstorm.jpeg",
  },
  { main: "Mist", message: "안개", weatherImage: "assets/weatherImg/fog.jpeg" },
  {
    main: "Haze",
    message: "옅은안개",
    weatherImage: "assets/weatherImg/fog.jpeg",
  },
  {
    main: "Fog",
    message: "짙은안개",
    weatherImage: "assets/weatherImg/fog.jpeg",
  },
  {
    main: "Dust",
    message: "미세먼지",
    weatherImage: "assets/weatherImg/cloudy.jpeg",
  },
  {
    main: "Sand",
    message: "황사",
    weatherImage: "assets/weatherImg/cloudy.jpeg",
  },
  {
    main: "Ash",
    message: "화산재❗️",
    weatherImage: "assets/weatherImg/cloudy.jpeg",
  },
  {
    main: "Squall",
    message: "둘풍❗️",
    weatherImage: "assets/weatherImg/cloudy.jpeg",
  },
  {
    main: "Tornado",
    message: "토네이도❗️",
    weatherImage: "assets/Thunderstorm.jpeg",
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
