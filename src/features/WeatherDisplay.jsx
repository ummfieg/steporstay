import React from "react";
import {
  ChangeLocationBtn,
  Degree,
  DisplayWrapper,
  RegionWrapper,
  WeatherMessageLine,
} from "../styles/WeatherDisplay.style";

const now = new Date();
const month = now.getMonth() + 1;
const day = now.getDate();
const today = `${month}월 ${day}일`;

const WeatherDisplay = ({
  onOpen,
  weatherDataList,
  weatherMessage,
  onChangeIndex,
  currentIndex,
  isLoading,
  errorMessage,
}) => {
  const { location, temp, uiName } = weatherDataList[currentIndex] || {};
  const displayLocation = location || uiName || "서울";
  const hasWeather = typeof temp === "number" && weatherMessage.length > 0;
  const roundedTemp = Math.round(temp);
  const handleOpenKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen();
    }
  };

  const handleChangeKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onChangeIndex();
    }
  };

  return (
    <>
      <DisplayWrapper>
        <span>{today}</span>
        <span> | </span>
        <RegionWrapper
          onClick={onOpen}
          onKeyDown={handleOpenKeyDown}
          role="button"
          tabIndex={0}
          title="지역 검색하기"
          aria-label="지역 검색하기"
        >
          <span>{displayLocation}</span>
        </RegionWrapper>
        <ChangeLocationBtn
          title="다음 지역 보기"
          aria-label="다음 지역 보기"
          role="button"
          tabIndex={0}
          onClick={onChangeIndex}
          onKeyDown={handleChangeKeyDown}
        />
        {hasWeather ? (
          <>
            <Degree>{roundedTemp}°C</Degree>
            <WeatherMessageLine>
              <span>{weatherMessage[0]}</span>
              {weatherMessage.length > 1 && (
                <>
                  <span> • </span>
                  <span>{weatherMessage.slice(1).join(" ")}</span>
                </>
              )}
            </WeatherMessageLine>
          </>
        ) : (
          <>
            <Degree>{isLoading ? "..." : "--"}°C</Degree>
            <span>
              {isLoading
                ? "날씨 불러오는 중..."
                : errorMessage === "api"
                ? "날씨 정보가 없어요"
                : "날씨 불러오는 중..."}
            </span>
          </>
        )}
      </DisplayWrapper>
    </>
  );
};

export default WeatherDisplay;
