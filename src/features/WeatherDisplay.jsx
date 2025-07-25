import React from "react";
import { Degree, DisplayWrapper, RegionWrapper } from "../styles/Weather.style";

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

const WeatherDisplay = ({ onOpen, weatherDataList, weatherMessage }) => {
  const { location, temp, weather, content } = weatherDataList[0] || {};
  const roundedTemp = Math.round(temp);

  return (
    <>
      <DisplayWrapper>
        <span>{mockDate.date}</span>
        <span> | </span>
        <RegionWrapper onClick={onOpen}>
          <span>{location}</span>
        </RegionWrapper>
        <Degree>{roundedTemp}°C</Degree>
        <span>• </span>
        <span>{weatherMessage}</span>
      </DisplayWrapper>
    </>
  );
};

export default WeatherDisplay;
