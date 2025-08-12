import React, { use, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Logo,
  StayIcon,
  StepIcon,
  TextBubble,
  Wrapper,
  WindowImgWrapper,
  LogoText,
  LogoSub,
  KeyIcon,
  CircleIcon,
  IconWrapper,
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
  const [currentIndex, setCurrentIndex] = useState(() => {
    const saved = localStorage.getItem("lastViewedIndex");
    return saved !== null ? Number(saved) : 0;
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const [logoMain, setLogoMain] = useState("Step Or Stay?");
  const [logoSub, setLogoSub] = useState("");
  const [clicked, setClicked] = useState(false);
  const [stepRecord, setStepRecord] = useState(() => {
    const saved = localStorage.getItem("userAction");
    return saved
      ? JSON.parse(saved).map((item) => ({
          ...item,
          date: new Date(item.date), // 문자열을 Date 객체로 변환
        }))
      : [];
  });
  const [actionMessage, setActionMessage] = useState("");

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

  useEffect(() => {
    const stored = localStorage.getItem("weatherData");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setWeatherDataList(parsed);
        setLocationList(parsed.map((d) => ({ id: d.id, name: d.location })));
      } catch (e) {
        console.error("localStorage 파싱 에러", e);
      }
    } else {
      handleSearchSubmit("서울");
    }
  }, []);

  useEffect(() => {
    if (weatherDataList.length === 0) return;

    try {
      localStorage.setItem("weatherData", JSON.stringify(weatherDataList));
    } catch (e) {
      console.error("localStorage 저장 에러", e);
    }
  }, [weatherDataList]);
  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);
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
      setErrorMessage(null);
    } catch (err) {
      console.error("검색 실패:", err);
      setErrorMessage("api");
    }
  };

  useEffect(() => {
    localStorage.setItem("userAction", JSON.stringify(stepRecord));
  }, [stepRecord]);

  const handleChangeIndex = () => {
    if (weatherDataList.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % weatherDataList.length);
  };

  useEffect(() => {
    localStorage.setItem("lastViewedIndex", String(currentIndex));
    console.log(currentIndex);
  }, [currentIndex]);

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
  const handleIconClick = (e) => {
    const type = e.target.dataset.type;
    if (type === "step") {
      setLogoMain("🏃🏻Step");
      setLogoSub("마음바꾸기");
    } else if (type === "stay") {
      setLogoMain("🛋️ Stay");
      setLogoSub("마음바꾸기");
    }
    setClicked(true);
  };

  const handleChangeMind = () => {
    setLogoMain("Step Or Stay?");
    setClicked(false);
    setLogoSub("");
  };

  const handleActionClick = (e) => {
    const action = e.target.dataset.type;
    if (action === "step")
      updateStepRecord(1, "오늘의 날씨는 Step! 가볼까? 🏃‍♀️🏃🏻");
    else if (action === "stay")
      updateStepRecord(0, "오늘의 날씨는 Stay! 이불밖은 위험해 💨");
  };

  const updateStepRecord = (count, message) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    setStepRecord((prev) => {
      const existsIndex = prev.findIndex(
        (item) => item.date.getTime() === today.getTime()
      );

      if (existsIndex !== -1) {
        const newRecords = [...prev];
        newRecords[existsIndex] = { date: today, count };
        return newRecords;
      }
      return [...prev, { date: today, count }];
    });

    setActionMessage(message);
    toast(message);
  };

  const handleClickRecord = () => {
    return `이번 주 7일 중 ${count}번 외출 했어요!`;
  };

  return (
    <Wrapper>
      <Logo>
        <LogoText $clicked={clicked}>{logoMain}</LogoText>
        {logoSub && <LogoSub onClick={handleChangeMind}>{logoSub}</LogoSub>}
      </Logo>
      <WindowImgWrapper>
        <div
          onClick={(e) => {
            handleIconClick(e);
            handleActionClick(e);
          }}
        >
          <StepIcon data-type="step" />
          <StayIcon data-type="stay" />
        </div>
        <KeyIcon />
        <IconWrapper>
          <CircleIcon />
          <CircleIcon />
          <CircleIcon />
        </IconWrapper>

        <TextBubble>
          <span>{recommendationText}</span>
        </TextBubble>
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          limit={1}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
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
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
      )}
    </Wrapper>
  );
};

export default Home;
