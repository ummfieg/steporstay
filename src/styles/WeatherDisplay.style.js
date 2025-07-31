import styled from "styled-components";

export const DisplayWrapper = styled.div`
  position: absolute;
  top: 180px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;

export const Degree = styled.h2`
  margin: 0;
  font-size: 40px;
`;

export const RegionWrapper = styled.div`
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 40%;
  border: none;
  cursor: pointer;
  padding: 3px;
`;

export const ChangeLocationBtn = styled.div`
  display: inline-block;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-image: url("assets/repeat.svg");
  width: 0.9rem;
  height: 0.9rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-left: 0.5em;
  padding: 2px;
  &:hover {
    transform: scale(1.1);
  }
`;
