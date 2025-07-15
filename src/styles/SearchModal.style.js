import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const Modal = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 338px;
  height: 303px;
  background-image: url("assets/search-modal.svg");
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  padding: 1rem;
`;

export const CloseBtn = styled.img`
  position: absolute;
  top: 5.6%;
  left: 4.15%;
  transform: translate(30%);
  width: 10px;
  height: 10px;
  cursor: pointer;
  z-index: 1000;
`;
