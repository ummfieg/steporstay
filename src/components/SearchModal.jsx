import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  CloseBtn,
  SearchBar,
  SearchWrapper,
  ModalInfoText,
  SelectedLocions,
} from "../styles/SearchModal.style";

const SearchModal = ({
  onClose,
  // inputValue,
  // onInputChange,
  locationList,
  setLocationList,
  onSearchSubmit,
}) => {
  const [input, setInput] = useState("");
  const handleChange = (e) => setInput(e.target.value);

  const handleSubmit = () => {
    if (!input.trim()) return;
    onSearchSubmit(input);
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
        <SelectedLocions>
          {locationList.map((value, index) => (
            <div key={index}>
              <span>{value}</span>
              <img src="assets/x-button.svg" />
            </div>
          ))}
        </SelectedLocions>

        <ModalInfoText>지역은 3개까지 추가할 수 있어요!</ModalInfoText>
      </Modal>
    </ModalOverlay>
  );
};

export default SearchModal;
