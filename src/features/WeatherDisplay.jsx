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
const today = `${month}월 ${day}일`;

const WeatherDisplay = ({
  onOpen,
  weatherDataList,
  weatherMessage,
  onChangeIndex,
  currentIndex,
}) => {
  const { location, temp, weather, uiName } =
    weatherDataList[currentIndex] || {};
  const roundedTemp = Math.round(temp);
  return (
    <>
      <DisplayWrapper>
        <span>{today}</span>
        <span> | </span>
        <RegionWrapper onClick={onOpen} title="지역 검색">
          <span>{location || uiName}</span>
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
