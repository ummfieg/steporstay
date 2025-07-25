const dustRules = [
  {
    min: 0,
    max: 15,
    recommendation: "외부 활동에 좋아요 🌞",
  },
  {
    min: 15,
    max: 35,
    recommendation: "짧은 외출엔 문제 없어요",
  },
  {
    min: 35,
    max: 75,
    recommendation: "KF94 마스크 착용 필수! 😷",
  },
  {
    min: 75,
    max: Infinity,
    recommendation: "외출 자제하고 실내 환기도 조심하세요! 🚫 Stay!",
  },
];

export const getDustRecommendation = (pm25) => {
  for (const { min, max, recommendation } of dustRules) {
    if (pm25 >= min && pm25 < max) {
      return { recommendation };
    }
  }
  return { recommendation: "" };
};
