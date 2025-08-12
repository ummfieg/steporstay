import styled from "styled-components";

export const Wrapper = styled.div`
  width: 600px;
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
  cursor: pointer;
`;
export const WindowImgWrapper = styled.div`
  min-height: 560px;
  width: 500px;
  background-image: url("assets/window.svg");
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  background-size: contain;
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 2.5rem;
  position: absolute;
  top: 540px;
  left: 37.5%;
  & > div:nth-child(1) {
    margin-right: 1.2rem;
  }
  & > div:nth-child(2) {
    margin-right: 1.9rem;
  }
`;

export const StepIcon = styled.div`
  background-image: url("assets/step-icon.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 40px;
  height: 112px;
  cursor: pointer;
  position: absolute;
  top: 530px;
  left: 50%;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const StayIcon = styled.div`
  background-image: url("assets/stay-icon.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 40px;
  height: 112px;
  cursor: pointer;
  position: absolute;
  top: 530px;
  left: 35.2%;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
export const KeyIcon = styled.div`
  background-image: url("assets/key-icon.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 65px;
  height: 65px;
  cursor: pointer;
  position: absolute;
  top: 540px;
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
  width: 253px;
  height: 154px;
  position: absolute;
  top: 380px;
  left: 44%;
  padding: 6% 5% 10% 7%; //부모넓이 기준으로 상대적으로 변함 반응형에 좋음

  display: flex;
  justify-content: center;
  align-items: center;
`;
