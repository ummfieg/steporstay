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
const kakaoKey = import.meta.env.VITE_KAKAO_API_KEY;

const Home = () => {
  const [locationList, setLocationList] = useState([]);
  const [weatherDataList, setWeatherDataList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { temp, pm2_5, weather, weatherId, visibility, wind, humidity } =
    weatherDataList[currentIndex] || {};

  const { weatherMessage, recommendationText } = getCombineMessage({
    temp,
    pm2_5,
    weather,
    weatherId,
    visibility,
    wind,
    humidity,
  });

  useEffect(() => {
    handleSearchSubmit("서울");
  }, []);

  const getWeatherInfo = async (cityName) => {
    const getLatLon = async (cityName) => {
      const response = await fetch(
        `https://dapi.kakao.com/v2/local/search/address.json?query=${cityName}`,
        {
          headers: {
            Authorization: `KakaoAK ${kakaoKey}`,
          },
        }
      );

      console.log(response.status);
      const data = await response.json();

      if (!data.documents || data.documents.length === 0) {
        throw new Error("좌표 정보가 없습니다.");
      }
      const { x, y } = data.documents[0];
      console.log("좌표", x, y);
      return {
        lon: parseFloat(x),
        lat: parseFloat(y),
      };
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

      if (
        !weatherData ||
        !weatherData.weather ||
        weatherData.weather.length === 0
      ) {
        throw new Error("날씨 데이터가 없습니다.");
      }

      console.log("날씨:", weatherData);
      console.log("미세먼지:", airData);

      return {
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
      };

      const lastLocation = locationList[locationList.length - 1];
      console.log("현재 불러온 지역", lastLocation);
    };

    const { lat, lon } = await getLatLon(cityName);
    const resWeatehrData = await getLocation(lat, lon);

    return resWeatehrData;
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSearchSubmit = async (locationName) => {
    if (locationList.length >= 3) {
      return;
    }
    try {
      const resWeatherData = await getWeatherInfo(locationName);
      if (locationList.some((loc) => loc.id === resWeatherData.id)) {
        return;
      }

      setWeatherDataList((prev) => [...prev, resWeatherData]);
      setLocationList((prev) => [
        ...prev,
        { id: resWeatherData.id, name: resWeatherData.location },
      ]);
    } catch (err) {
      console.error("검색 실패:", err);
    }
  };

  const handleChangeIndex = () => {
    setCurrentIndex((prev) => (prev + 1) % weatherDataList.length);
  };

  const handleDeleteAndUpdate = (idToDelete) => {
    const newLocationList = locationList.filter((loc) => loc.id !== idToDelete);
    const newWeatherDataList = weatherDataList.filter(
      (data) => data.id !== idToDelete
    );

    setLocationList(newLocationList);
    setWeatherDataList(newWeatherDataList);

    const deletedIndex = weatherDataList.findIndex(
      (data) => data.id === idToDelete
    );
    if (deletedIndex === currentIndex) {
      setCurrentIndex(0);
    } else if (currentIndex > newLocationList.length - 1) {
      setCurrentIndex(newLocationList.length - 1);
    }
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
        onChangeIndex={handleChangeIndex}
        currentIndex={currentIndex}
      />
      {isModalOpen && (
        <SearchModal
          onClose={closeModal}
          locationList={locationList}
          setLocationList={setLocationList}
          onSearchSubmit={handleSearchSubmit}
          onDelete={handleDeleteAndUpdate}
        />
      )}
    </Wrapper>
  );
};

export default Home;
