const weatherMainRules = [
  { main: "Clear", message: "맑음" },
  { main: "Clouds", message: "구름" },
  { main: "Rain", message: "비" },
  { main: "Drizzle", message: "이슬비" },
  { main: "Snow", message: "눈" },
  { main: "Thunderstorm", message: "천둥⚡️번개" },
  { main: "Mist", message: "안개" },
  { main: "Haze", message: "옅은안개" },
  { main: "Fog", message: "짙은안개" },
  { main: "Dust", message: "미세먼지" },
  { main: "Sand", message: "황사" },
  { main: "Ash", message: "화산재❗️" },
  { main: "Squall", message: "둘풍❗️" },
  {
    main: "Tornado",
    message: "토네이도❗️",
  },
];

export const getWeatherMainMessage = (weatherMainArray) => {
  for (const { main, message } of weatherMainRules) {
    if (weatherMainArray.includes(main)) {
      console.log("메인날씨?", main);
      return { message };
    }
  }
  return { message: null };
};
