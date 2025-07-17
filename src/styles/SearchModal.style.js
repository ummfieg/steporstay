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

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.625rem;
  margin-top: 3rem;
  position: relative;

  img {
    cursor: pointer;
    position: absolute;
    left: 90%;
    top: 27%;
  }
`;

export const SearchBar = styled.input`
  border: 1px solid transparent;
  flex: 1;
  border-radius: 1.2rem;
  background-color: var(--searchBg);
  padding: 0.8rem;
  height: 3rem;

  :focus {
    border: 3px solid var(--secondary);
  }
`;

export const ModalInfoText = styled.p`
  font-size: 0.7rem;
  color: var(--secondary);
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translateX(-50%);
`;

export const SelectedLocions = styled.div`
  padding: 3px;
  border: none;
  border-radius: 10%;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);

  div {
    display: flex;
    gap: 0.625rem;
  }

  img {
    cursor: pointer;
    width: 1rem;
  }
`;
