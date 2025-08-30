import {
  getHumidityRec,
  getDustRecommendation,
  getTempMessage,
  getVisibilityMessageRec,
  getWeatherIdRecommendations,
  getWeatherMainMessage,
  getWindSpeedMessageRec,
} from "./weatherAllRules";

export const getCombineMessage = ({
  temp,
  pm2_5,
  weather = [],
  weatherId,
  visibility,
  wind,
  humidity,
}) => {
  const { recommendation: dustRec } = getDustRecommendation(pm2_5);
  const { message: visibilityMessage, recommendation: visibilityRec } =
    getVisibilityMessageRec(visibility);
  const { message: tempMessage, recommendation: tempRec } =
    getTempMessage(temp);
  const { recommendation: weatherIdRec } =
    getWeatherIdRecommendations(weatherId);
  const { message: weatherMainMessage, weatherImage } =
    getWeatherMainMessage(weather);
  const {
    message: windMessage,
    recommendation: windRec,
    max: windMaxSpeed,
  } = getWindSpeedMessageRec(wind);
  const { recommendation: humidityRec } = getHumidityRec(humidity);
  const weatherMainList = weather.map((w) => w.main).join(",");
  const weatherMessage = [];
  const recommendationText = [];

  // 일반 날씨 (기본반영)
  if (weatherMainMessage) weatherMessage.push(weatherMainMessage);
  if (tempMessage) weatherMessage.push(tempMessage);

  //폭염 or 한파
  if ((temp <= 5 || temp >= 30) && tempRec) {
    recommendationText.push(tempRec);
  }

  // 비, 안개 조합
  if (weatherMainList.includes("Rain") && weatherMainList.includes("Fog")) {
    if (visibilityRec) recommendationText.push(visibilityRec);
    if (visibilityMessage) weatherMessage.push(visibilityMessage);
  }

  if (temp < 30) {
    if (windMaxSpeed > 7) {
      if (windMessage) weatherMessage.push(windMessage);
      if (windRec) recommendationText.push(windRec);
    }
  }

  // 미세먼지
  if (weatherMainList.includes("Dust")) {
    if (dustRec) recommendationText.push(dustRec);
  }

  // 습도
  if ((temp > 31 && humidity > 69) || humidity > 72) {
    if (humidityRec) recommendationText.push(humidityRec);
  }

  if (
    weatherIdRec &&
    !recommendationText.includes(weatherIdRec) &&
    !recommendationText.includes(windRec) &&
    !recommendationText.includes(dustRec) &&
    !recommendationText.includes(tempRec)
  ) {
    recommendationText.push(weatherIdRec);
  }

  return { weatherMessage, recommendationText, weatherImage };
};
