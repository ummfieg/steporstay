import React from "react";
import {
  Modal,
  ModalOverlay,
  CloseBtn,
  SearchBar,
  SearchWrapper,
  ModalInfoText,
  SelectedLocions,
} from "../styles/SearchModal.style";

const SearchModal = ({ onClose }) => {
  return (
    <ModalOverlay>
      <Modal>
        <CloseBtn src="assets/x-button.svg" alt="" onClick={onClose} />
        <SearchWrapper>
          <SearchBar placeholder="날씨 정보를 불러올 지역을 입력하세요"></SearchBar>
          <img src="assets/search-icon.svg" />
        </SearchWrapper>
        <SelectedLocions>
          <div>
            서울
            <img src="assets/x-button.svg" />
          </div>
        </SelectedLocions>

        <ModalInfoText>지역은 3개까지 추가할 수 있어요!</ModalInfoText>
      </Modal>
    </ModalOverlay>
  );
};

export default SearchModal;
