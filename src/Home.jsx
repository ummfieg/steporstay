import React, { useEffect, useState } from "react";
import { Logo, Wrapper } from "./styles/Home.style";
import Window from "./assets/window.svg";
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
      <Logo>Step Or Stay ?</Logo>
      <img src={Window} height={560} />
      <WeatherDisplay onOpen={openModal} />
      {isModalOpen && <SearchModal onClose={closeModal} />}
    </Wrapper>
  );
};

export default Home;
