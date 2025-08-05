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
  span {
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--logo);
    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);
    text-align: center;
  }
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
  left: 35%;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
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
