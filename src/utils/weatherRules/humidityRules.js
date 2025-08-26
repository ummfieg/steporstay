const humidityRules = [
  {
    min: 70,
    max: 80,
    recommendation: "음❓습해요 환기추천해요 ",
  },
  {
    min: 80,
    max: 100,
    recommendation: "습함끈적..😮‍💨 물 한잔과 제습모드 가동! ",
  },
];

export const getHumidityRec = (humidity) => {
  const value = Number(humidity);
  for (const { min, max, recommendation } of humidityRules) {
    if (min <= value && value < max) {
      return { recommendation };
    }
  }
  return { recommendation: null };
};
