import React, { useEffect, useState } from "react";
import {
  Logo,
  StayIcon,
  StepIcon,
  TextBubble,
  Wrapper,
  WindowImgWrapper,
} from "./styles/Home.style";
import WeatherDisplay from "./features/WeatherDisplay";
import SearchModal from "./components/SearchModal";
import { getCombineMessage } from "./utils/combineWeatherMessage";
const weatherKey = import.meta.env.VITE_WEATHER_API_KEY;

const Home = () => {
  const [locationList, setLocationList] = useState(["서울"]);
  const [weatherDataList, setWeatherDataList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { temp, pm2_5, weather, weatherId, visibility, wind, humidity } =
    weatherDataList[0] || {};

  const { weatherMessage, recommendationText } = getCombineMessage({
    temp,
    pm2_5,
    weather,
    weatherId,
    visibility,
    wind,
    humidity,
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const getLatLon = async (cityName) => {
          const response = await fetch(
            `https://api.openweathermap.org/geo/1.0/direct?q=${cityName},KR&limit=3&appid=${weatherKey}`
          );
          console.log(response.status);
          const data = await response.json();

          if (!data || data.length === 0) {
            throw new Error("좌표 정보가 없습니다.");
          }

          const { lat, lon } = data[0];
          console.log("좌표:", lat, lon);
          return { lat, lon };
        };

        const getLocation = async (lat, lon) => {
          const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherKey}&units=metric&lang=kr`;
          const airURL = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${weatherKey}`;

          const [weatherRes, airRes] = await Promise.all([
            fetch(weatherURL),
            fetch(airURL),
          ]);

          const weatherData = await weatherRes.json();
          const airData = await airRes.json();
          console.log("weather:", weather);
          if (
            !weatherData ||
            !weatherData.weather ||
            weatherData.weather.length === 0
          ) {
            throw new Error("날씨 데이터가 없습니다.");
          }

          console.log("날씨:", weatherData);
          console.log("미세먼지:", airData);

          console.log("세부날씨:", weatherData.weather);
          console.log("미먼농도:", airData.list[0].components.pm2_5);

          setWeatherDataList((prevData) => [
            ...prevData,
            {
              id: weatherData.id,
              location: weatherData.name,
              temp: weatherData.main.temp,
              visibility: weatherData.visibility,
              weather: weatherData.weather.map((w) => w.main),
              weatherId: weatherData.weather[0].id,
              humidity: weatherData.main.humidity,
              wind: weatherData.wind.speed,
              pm2_5: airData.list[0].components.pm2_5,
              aqi: airData.list[0].main.aqi,
            },
          ]);
        };
        const { lat, lon } = await getLatLon(
          locationList[locationList.length - 1]
        );
        await getLocation(lat, lon);
        console.log(locationList);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchWeatherData();
  }, [locationList]);

  const handelSerachSubmit = (newLocation) => {
    setLocationList((prev) => [...prev, newLocation]);
  };

  return (
    <Wrapper>
      <Logo>
        <span>Step</span>
        <span>Or</span>
        <span>Stay?</span>
      </Logo>
      <WindowImgWrapper>
        <StepIcon />
        <StayIcon />
        <TextBubble>
          <span>{recommendationText}</span>
        </TextBubble>
      </WindowImgWrapper>
      <WeatherDisplay
        onOpen={openModal}
        weatherDataList={weatherDataList}
        weatherMessage={weatherMessage}
      />
      {isModalOpen && (
        <SearchModal
          onClose={closeModal}
          locationList={locationList}
          setLocationList={setLocationList}
          onSearchSubmit={handelSerachSubmit}
        />
      )}
    </Wrapper>
  );
};

export default Home;
