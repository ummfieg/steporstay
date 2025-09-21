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
  WeatherImageWrapper,
  WindowSection,
} from "./styles/Home.style";
import WeatherDisplay from "./features/WeatherDisplay";
import SearchModal from "./components/SearchModal";
import { getCombineMessage } from "./utils/combineWeatherMessage";
import { locationMapping } from "./utils/locationMapping";
const weatherKey = import.meta.env.VITE_WEATHER_API_KEY;
const kakaoKey = import.meta.env.VITE_KAKAO_API_KEY;

const Home = () => {
  // 날씨 api 및 관리
  const [weatherDataList, setWeatherDataList] = useState([]);
  const [locationList, setLocationList] = useState([]);

  const getWeatherInfo = async (cityName, uiName) => {
    const getLatLon = async (cityName) => {
      const response = await fetch(
        `https://dapi.kakao.com/v2/local/search/address.json?query=${cityName}`,
        {
          headers: {
            Authorization: `KakaoAK ${kakaoKey}`,
          },
        }
      );

      const data = await response.json();

      if (!data.documents || data.documents.length === 0) {
        throw new Error("좌표 정보가 없습니다.");
      }
      const { x, y } = data.documents[0];
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
      return {
        id: weatherData.id,
        apiName: weatherData.name,
        uiName: uiName,
        cityName: cityName,
        temp: weatherData.main.temp,
        visibility: weatherData.visibility,
        weather: weatherData.weather.map((w) => w.main),
        weatherId: weatherData.weather[0].id,
        humidity: weatherData.main.humidity,
        wind: weatherData.wind.speed,
        pm2_5: airData.list[0].components.pm2_5,
        aqi: airData.list[0].main.aqi,
        updatedTime: Date.now(),
      };
    };

    const { lat, lon } = await getLatLon(cityName);
    const resWeatehrData = await getLocation(lat, lon);

    return resWeatehrData;
  };

  useEffect(() => {
    if (weatherDataList.length === 0) return;
    const intervalId = setInterval(() => {
      const nowTime = Date.now();

      weatherDataList.forEach((data) => {
        if (nowTime - data.updatedTime > 10 * 60 * 1000) {
          handleSearchSubmit({ cityName: data.cityName, uiName: data.uiName });
        }
      });
    }, 60 * 1000);
    return () => clearInterval(intervalId);
  }, [weatherDataList]);

  const handleDeleteAndUpdate = (idToDelete, nameToDelete) => {
    const newLocationList = locationList.filter(
      (loc) =>
        !(
          loc.id === idToDelete &&
          loc.name === nameToDelete &&
          !(loc.id === 1835848 && loc.name === "서울")
        )
    );
    const newWeatherDataList = weatherDataList.filter(
      (data) =>
        !(
          data.id === idToDelete &&
          data.uiName === nameToDelete &&
          !(data.id === 1835848 && data.uiName === "서울")
        )
    );
    setLocationList(newLocationList);
    setWeatherDataList(newWeatherDataList);

    const deletedIndex = weatherDataList.findIndex(
      (data) => data.id === idToDelete && data.uiName === nameToDelete
    );
    if (deletedIndex === currentIndex) {
      setCurrentIndex(0);
    } else if (currentIndex > newLocationList.length - 1) {
      setCurrentIndex(newLocationList.length - 1);
    }
  };

  // 모달
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // 지역별 인덱스
  const [currentIndex, setCurrentIndex] = useState(() => {
    const saved = localStorage.getItem("lastViewedIndex");
    return saved !== null ? Number(saved) : 0;
  });

  const handleChangeIndex = () => {
    if (weatherDataList.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % weatherDataList.length);
  };

  useEffect(() => {
    localStorage.setItem("lastViewedIndex", String(currentIndex));
  }, [currentIndex]);

  //로고
  const [logoMain, setLogoMain] = useState("Step Or Stay?");
  const [logoSub, setLogoSub] = useState("");

  //기록
  const [errorMessage, setErrorMessage] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [stepRecord, setStepRecord] = useState(() => {
    const saved = localStorage.getItem("userAction");
    return saved ? JSON.parse(saved) : [];
  });
  const [actionMessage, setActionMessage] = useState("");
  const [clickedActionType, setClickedActionType] = useState(null);

  const handleIconClick = (e) => {
    const type = e.target.dataset.type;
    if (type === "step") {
      setClickedActionType(type);
      setLogoMain("🏃🏻Step");
      setLogoSub("마음바꾸기");
    } else if (type === "stay") {
      setClickedActionType(type);
      setLogoMain("🛋️ Stay");
      setLogoSub("마음바꾸기");
    }
    setClicked(true);
  };

  const handleChangeMind = () => {
    setLogoMain("Step Or Stay?");
    setClicked(false);
    setLogoSub("");
    updateStepRecord(0);
    setClickedActionType(null);
  };

  const handleActionClick = (e) => {
    const action = e.target.dataset.type;
    if (action === "step")
      updateStepRecord(1, "오늘의 날씨는 Step! 가볼까? 🏃‍♀️🏃🏻");
    else if (action === "stay")
      updateStepRecord(0, "오늘의 날씨는 Stay! 이불밖은 위험해 💨");
  };

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  const getThisWeek = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const rawDay = today.getDay();
    const day = rawDay === 0 ? 6 : rawDay - 1;

    const monday = new Date(today);
    monday.setDate(today.getDate() - day);

    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);

    const mondayStr =
      monday.getFullYear() +
      "-" +
      String(monday.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(monday.getDate()).padStart(2, "0");
    const sundayStr =
      sunday.getFullYear() +
      "-" +
      String(sunday.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(sunday.getDate()).padStart(2, "0");

    return { mondayStr, sundayStr };
  };

  const updateStepRecord = (count, message) => {
    const today = new Date();
    const dateStr =
      today.getFullYear() +
      "-" +
      String(today.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(today.getDate()).padStart(2, "0");

    const { mondayStr, sundayStr } = getThisWeek();
    if (dateStr >= mondayStr && dateStr <= sundayStr) {
      setStepRecord((prev) => {
        const existsIndex = prev.findIndex((item) => item.date === dateStr);
        let newRecords;
        if (existsIndex !== -1) {
          newRecords = [...prev];
          newRecords[existsIndex] = { date: dateStr, count };

          return newRecords;
        } else {
          newRecords = [...prev, { date: dateStr, count }];
          return newRecords;
        }
      });
      setActionMessage(message);
      if (message) toast(message);
    }
  };

  useEffect(() => {
    localStorage.setItem("userAction", JSON.stringify(stepRecord));
  }, [stepRecord]);

  const handleClickRecord = () => {
    const totalCount = stepRecord.reduce((sum, { count }) => sum + count, 0);
    if (totalCount === 0) {
      toast(`아직 이번주는 0 STEP! `);
    }
    if (totalCount >= 1) {
      toast(`이번주에는 ${totalCount} step 했어요!`);
    }
  };

  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const { mondayStr } = getThisWeek();
    const mondayDate = new Date(mondayStr);
    mondayDate.setHours(0, 0, 0, 0);

    setStepRecord((prev) =>
      prev.filter((item) => {
        const itemDate = new Date(item.date);
        itemDate.setHours(0, 0, 0, 0);
        return itemDate >= mondayDate;
      })
    );
  }, []);

  const { temp, pm2_5, weather, weatherId, visibility, wind, humidity } =
    weatherDataList[currentIndex] || {};

  const { weatherMessage, recommendationText, weatherImage } =
    getCombineMessage({
      temp,
      pm2_5,
      weather,
      weatherId,
      visibility,
      wind,
      humidity,
    });

  // 스토리지 로직
  useEffect(() => {
    const stored = localStorage.getItem("weatherData");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setWeatherDataList(parsed);

        setLocationList(
          parsed.map((d) => ({ id: d.id, name: d.location || d.uiName }))
        );
      } catch (e) {
        console.error("localStorage 파싱 에러", e);
      }
    } else {
      handleSearchSubmit({ cityName: "서울", uiName: "서울" });
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

  // 지역 검색
  const handleSearchSubmit = async ({ cityName, uiName }) => {
    const nowTime = Date.now();

    const existing = weatherDataList.find(
      (data) => data.cityName === cityName && data.uiName === uiName
    );

    if (existing && nowTime - existing.updatedTime < 10 * 60 * 1000) {
      return;
    }

    if (!existing && locationList.length >= 3) {
      return;
    }

    try {
      const resWeatherData = await getWeatherInfo(cityName, uiName);

      if (existing) {
        setWeatherDataList((prev) =>
          prev.map((data) =>
            data.cityName === cityName && data.uiName === uiName
              ? { ...resWeatherData, updatedTime: nowTime }
              : data
          )
        );
      } else {
        setWeatherDataList((prev) => [
          ...prev,
          { ...resWeatherData, updatedTime: nowTime },
        ]);
        setLocationList((prev) => [
          ...prev,
          { id: resWeatherData.id, name: uiName },
        ]);
      }

      setErrorMessage(null);
    } catch (err) {
      console.error("검색 실패:", err);
      setErrorMessage("api");
    }
  };

  return (
    <Wrapper>
      <Logo>
        <LogoText $clicked={clicked}>{logoMain}</LogoText>
        {logoSub && <LogoSub onClick={handleChangeMind}>{logoSub}</LogoSub>}
      </Logo>
      <WindowSection>
        <WeatherImageWrapper>
          <img src={weatherImage} />
        </WeatherImageWrapper>
        <WindowImgWrapper>
          <div
            onClick={(e) => {
              handleIconClick(e);
              handleActionClick(e);
            }}
          >
            <StepIcon
              data-type="step"
              disabled={clickedActionType === "stay"}
            />
            <StayIcon
              data-type="stay"
              disabled={clickedActionType === "step"}
            />
          </div>
          <KeyIcon onClick={handleClickRecord} />
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
      </WindowSection>
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
