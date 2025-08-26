import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  CloseBtn,
  SearchBar,
  SearchWrapper,
  ModalInfoText,
  SelectedLocions,
  InfoText,
} from "../styles/SearchModal.style";
import { locationMapping } from "../utils/locationMapping";
const SearchModal = ({
  onClose,
  locationList,
  onSearchSubmit,
  onDelete,
  errorMessage,
  setErrorMessage,
}) => {
  const [input, setInput] = useState("");
  const [isError, setIsError] = useState(false);
  const handleChange = (e) => setInput(e.target.value);
  console.log(locationList, "지역리스트");
  const handleSubmit = (e) => {
    e.preventDefault();
    // const trimmed = input.trim();
    let trimmed = input.trim();

    if (trimmed.length < 2 || !/^[가-힣]+$/.test(trimmed)) {
      setErrorMessage("input");
      return;
    }
    setErrorMessage(null);
    // onSearchSubmit(trimmed);
    onSearchSubmit({
      cityName: locationMapping[trimmed]?.cityName || trimmed,
      uiName: locationMapping[trimmed]?.uiName || trimmed,
    });

    setInput("");
  };

  return (
    <ModalOverlay>
      <Modal>
        <CloseBtn src="assets/x-button.svg" alt="" onClick={onClose} />
        <SearchWrapper>
          <SearchBar
            placeholder="날씨 정보를 불러올 지역을 입력하세요"
            value={input}
            onChange={handleChange}
            // onKeyDown={(e) => {
            //   if (e.key === "Enter") handleSubmit();
            // }}
          ></SearchBar>

          <img src="assets/search-icon.svg" onClick={handleSubmit} />
        </SearchWrapper>

        <InfoText $isError={!!errorMessage}>
          {errorMessage === "input" && "올바른 지역명을 입력해주세요!"}
          {errorMessage === "api" && "해당 지역의 날씨 정보가 없어요 🔍❗️"}
          {!errorMessage &&
            "* 날씨 정보는 관측소 기준으로, 검색 지역과 다를 수 있어요."}
        </InfoText>

        <SelectedLocions>
          {locationList.map((value, id) => (
            <div key={value.id}>
              <span>{value.name}</span>
              {value.id !== 1835848 && (
                <img
                  src="assets/x-button.svg"
                  onClick={() => onDelete(value.id)}
                />
              )}
            </div>
          ))}
        </SelectedLocions>

        <ModalInfoText>
          기본지역은 서울이며, 추가로 2개까지 선택할 수 있어요!
        </ModalInfoText>
      </Modal>
    </ModalOverlay>
  );
};

export default SearchModal;
