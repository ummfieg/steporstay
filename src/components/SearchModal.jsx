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

const SearchModal = ({ onClose, locationList, onSearchSubmit, onDelete }) => {
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
