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

const Home = () => {
  const [locationList, setLocationList] = useState(["Seoul"]);
  const [weatherDate, setWeatherData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const fetchWeatherData = async () => {};
  }, []);

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
          <span>🧥 외출시 겉옷을 챙기세요!</span>
        </TextBubble>
      </WindowImgWrapper>
      <WeatherDisplay onOpen={openModal} />
      {isModalOpen && <SearchModal onClose={closeModal} />}
    </Wrapper>
  );
};

export default Home;
