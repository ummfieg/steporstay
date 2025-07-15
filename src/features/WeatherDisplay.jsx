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

const WeatherDisplay = ({ onOpen }) => {
  return (
    <>
      <DisplayWrapper>
        <span>{mockDate.date}</span>
        <span> | </span>
        <RegionWrapper onClick={onOpen}>
          <span>{mockDate.region}</span>
        </RegionWrapper>
        <Degree>{mockDate.dgree}'c</Degree>
        <span>{mockDate.content}</span>
      </DisplayWrapper>
    </>
  );
};

export default WeatherDisplay;
