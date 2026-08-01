import styled from "styled-components";

export const Wrapper = styled.div`
  width: min(100%, 37.5rem);
  padding: 0.625rem;
  display: flex;
  background-color: #f1ead8;
  background-image: radial-gradient(rgba(255, 255, 255, 0.45) 0.5px, transparent 0.5px),
    radial-gradient(rgba(0, 0, 0, 0.08) 0.6px, transparent 0.6px);
  background-position: 0 0, 1px 1px;
  background-size: 3px 3px, 5px 5px;
  flex-direction: column;
  min-height: 100vh;
  min-height: 100svh;
  position: relative;
  align-items: center;
  overflow: hidden;
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
  display: inline-flex;
  gap: 0.02rem;

  span {
    display: inline-block;
    transition: transform 0.25s ease-in-out;
  }

  &:hover span {
    transform: scaleX(-1);
  }
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
  width: 17.25rem;
  height: 10.8rem;
  position: absolute;
  top: 23rem;
  left: 41.5%;
  padding: 2.25rem 2.45rem 3rem 2.35rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  text-align: center;
  font-size: 0.88rem;
  line-height: 1.35;
  word-break: keep-all;

  p {
    margin: 0;
    max-width: 13rem;
  }
`;
