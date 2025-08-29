const windSpeedRules = [
  { min: 0, max: 3, message: "바람은? 느껴지지않아요", recommendation: "" },
  {
    min: 4,
    max: 7,
    message: "살랑 바람 불어요",
    recommendation: "산책 어때요? 🏃🏻",
  },
  {
    min: 7,
    max: 10,
    message: "꽤 바람이 불어요",
    recommendation: "얇은 겉옷 챙기세요! 🧥",
  },
  {
    min: 10,
    max: 14,
    message: "바람이 강해요",
    recommendation: "스타일 주의!! 모자조심해요! 💨",
  },
  {
    min: 14,
    max: Infinity,
    message: "바람이 심하게 불어요 조심해요",
    recommendation: "Stay⚠️ 추천해요 다 날아갈 것 같아요!",
  },
];

export const getWindSpeedMessageRec = (windSpeed) => {
  for (const { min, max, message, recommendation } of windSpeedRules) {
    if (windSpeed >= min && windSpeed < max) {
      return { message, recommendation, max };
    }
  }
  return { message: null, recommendation: null };
};
