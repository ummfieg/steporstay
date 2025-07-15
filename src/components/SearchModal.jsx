import React from "react";
import { Modal, ModalOverlay, CloseBtn } from "../styles/SearchModal.style";

const SearchModal = ({ onClose }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <Modal>
        <CloseBtn src="assets/x-button.svg" alt="" onClick={onClose} />
      </Modal>
    </ModalOverlay>
  );
};

export default SearchModal;
