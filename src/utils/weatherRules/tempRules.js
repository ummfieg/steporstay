const tempRules = [
  {
    min: -100,
    max: -5,
    message: "한파로 너무 추운날이에요 🥶",
    recommendation: "이불밖은 위험해요! Stay",
  },
  {
    min: -5,
    max: 5,
    message: "정말 정말 추워요 🧣🧤",
    recommendation: "감기조심! 목도리랑 핫팩챙겨요",
  },
  { min: 5, max: 17, message: "기온이 낮아 쌀쌀해요" },
  { min: 17, max: 24, message: "흠~ 선선해요 좋은데요?" },
  { min: 24, max: 27, message: "점점 더워지고있어요" },
  { min: 27, max: 31, message: "덥다 더워.." },
  {
    min: 31,
    max: 34,
    message: "헥 날씨가 너무 더워요;",
    recommendation: "썬크림🌞 수분 보충필수!🥤",
  },
  {
    min: 34,
    max: 37,
    message: "폭염이에요 진짜 더워요❕",
    recommendation: "잠깐! 물 마시고 양산챙겨요 😎",
  },
  {
    min: 37,
    max: 100,
    message: "와.. 폭염 그 이상으로 더워요",
    recommendation: "나가면 녹아요 Stay❗️추천해요",
  },
];

export const getTempMessage = (temp) => {
  for (const { min, max, message, recommendation } of tempRules) {
    if (temp >= min && temp < max) {
      const result = { message };
      if (recommendation) {
        result.recommendation = recommendation;
      }
      return result;
    }
  }
  return { message: null };
};
