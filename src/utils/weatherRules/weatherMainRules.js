const weatherMainRules = [
  { main: "Clear", message: "맑음", weatherImage: "assets/sunny.png" },
  { main: "Clouds", message: "구름", weatherImage: "assets/cloud.png" },
  { main: "Rain", message: "비", weatherImage: "assets/rain.png" },
  { main: "Drizzle", message: "이슬비", weatherImage: "assets/rain.png" },
  { main: "Snow", message: "눈", weatherImage: "assets/snow.png" },
  {
    main: "Thunderstorm",
    message: "천둥⚡️번개",
    imagweatherImagee: "assets/Thunderstorm.png",
  },
  { main: "Mist", message: "안개", weatherImage: "assets/fog.png" },
  { main: "Haze", message: "옅은안개", weatherImage: "assets/fog.png" },
  { main: "Fog", message: "짙은안개", weatherImage: "assets/fog.png" },
  { main: "Dust", message: "미세먼지", weatherImage: "assets/cloudy.png" },
  { main: "Sand", message: "황사", weatherImage: "assets/cloudy.png" },
  { main: "Ash", message: "화산재❗️", weatherImage: "assets/cloudy.png" },
  { main: "Squall", message: "둘풍❗️", weatherImage: "assets/cloudy.png" },
  {
    main: "Tornado",
    message: "토네이도❗️",
    weatherImage: "assets/Thunderstorm.png",
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
