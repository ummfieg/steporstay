import styled from "styled-components";

export const Wrapper = styled.div`
  width: 37.5rem;
  padding: 0.625rem;
  display: flex;
  background-image: url("assets/background-img.svg");
  flex-direction: column;
  height: 100vh;
  position: relative;
  align-items: center;
`;

export const Logo = styled.div`
  margin: 1rem;
  display: flex;
  gap: 0.5rem;
  align-items: end;
`;
export const LogoText = styled.span`
  font-size: ${(props) => (props.$clicked ? "2.8rem" : "2.5rem")};
  font-weight: bold;
  color: ${(props) => (props.$clicked ? "#000000" : "var(--logo)")};
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);
  text-align: center;
  transition: font-size 0.3s ease-in-out;
`;

export const LogoSub = styled.span`
  color: var(--placeholder);
  font-size: 0.8rem;
  opacity: 0.6;
  cursor: pointer;
`;

export const WindowSection = styled.div`
  position: relative;
  width: 31.25rem;
  min-height: 35rem;
`;

export const WindowImgWrapper = styled.div`
  min-height: 35rem;
  width: 31.25rem;
  background-image: url("assets/window.svg");
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  background-size: contain;
  display: flex;
  z-index: 2;
`;

export const WeatherImageWrapper = styled.div`
  min-height: 34.375rem;
  width: 31.25rem;
  justify-content: center;
  align-items: center;
  display: flex;
  overflow: hidden;
  position: absolute;
  z-index: 1;

  img {
    min-height: 31.25rem;
    width: 18.75rem;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 2.5rem;
  position: absolute;
  top: 33.75rem;
  left: 37.5%;
  & > div:nth-child(1) {
    margin-right: 1.2rem;
  }
  & > div:nth-child(2) {
    margin-right: 1.9rem;
  }
`;

export const StepIcon = styled.button`
  background-image: url("assets/step-icon.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: none;
  background-color: transparent;
  width: 2.5rem;
  height: 7rem;
  cursor: pointer;
  position: absolute;
  top: 33.125rem;
  left: 50%;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
`;

export const StayIcon = styled.button`
  background-image: url("assets/stay-icon.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: none;
  background-color: transparent;
  width: 2.5rem;
  height: 7rem;
  cursor: pointer;
  position: absolute;
  top: 33.125rem;
  left: 35.2%;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
`;
export const KeyIcon = styled.div`
  background-image: url("assets/key-icon.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 4.1rem;
  height: 4.1rem;
  cursor: pointer;
  position: absolute;
  top: 33.75rem;
  left: 65%;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const CircleIcon = styled.div`
  background-image: url("assets/circle-icon.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 1rem;
  height: 1rem;
`;

export const TextBubble = styled.div`
  background-image: url("assets/text-bubble.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 15.82rem;
  height: 9.625rem;
  position: absolute;
  top: 23.75rem;
  left: 44%;
  padding: 6% 5% 10% 7%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
