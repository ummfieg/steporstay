import React from "react";
import {
  ChangeLocationBtn,
  Degree,
  DisplayWrapper,
  RegionWrapper,
} from "../styles/WeatherDisplay.style";

const now = new Date();
const month = now.getMonth() + 1;
const day = now.getDate();
const formattedDate = `${month}월 ${day}일`;
const mockDate = {
  date: formattedDate,
  region: "서울",
  dgree: 32,
  content: "현재 기운은 높고, 자외선이 강해요",
};

const WeatherDisplay = ({
  onOpen,
  weatherDataList,
  weatherMessage,
  onChangeIndex,
  currentIndex,
}) => {
  const { location, temp, weather } = weatherDataList[currentIndex] || {};
  const roundedTemp = Math.round(temp);
  console.log("현재 보여지는 지역", weatherDataList[currentIndex]);

  return (
    <>
      <DisplayWrapper>
        <span>{mockDate.date}</span>
        <span> | </span>
        <RegionWrapper onClick={onOpen} title="지역 검색">
          <span>{location}</span>
        </RegionWrapper>
        <ChangeLocationBtn title="지역 변경" onClick={onChangeIndex} />
        <Degree>{roundedTemp}°C</Degree>
        <span>{weatherMessage[0]}</span>
        <span>• </span>
        <span>{weatherMessage.slice(1).join(" ")}</span>
      </DisplayWrapper>
    </>
  );
};

export default WeatherDisplay;
