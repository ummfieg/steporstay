import styled from "styled-components";

export const DisplayWrapper = styled.div`
  position: absolute;
  top: 11.25rem;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  max-width: 25rem;
  text-align: center;
  word-break: keep-all;
  z-index: 3;
`;

export const Degree = styled.h2`
  margin: 0;
  font-size: 2.5rem;
`;

export const WeatherMessageLine = styled.div`
  word-break: keep-all;
  white-space: nowrap;
`;

export const RegionWrapper = styled.div`
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.72);
  border-radius: 999px;
  border: none;
  cursor: pointer;
  padding: 0.188rem 0.5rem;
  box-shadow: 0 0.125rem 0.375rem rgba(0, 0, 0, 0.08);
  transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
    transform: translateY(-0.063rem);
  }

  &:focus-visible {
    outline: 0.125rem solid rgba(0, 0, 0, 0.45);
    outline-offset: 0.125rem;
  }
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
  padding: 0.125rem;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: rotate(90deg) scale(1.1);
  }

  &:focus-visible {
    outline: 0.125rem solid rgba(0, 0, 0, 0.45);
    outline-offset: 0.125rem;
    border-radius: 50%;
  }
`;
