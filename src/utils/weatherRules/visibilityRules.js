const visibilityRules = [
  {
    min: 10000,
    max: Infinity,
    message: "시야가 좋아요!",
    recommendation: "잠깐 멀리 바라보세요 👀",
  },
  {
    min: 4000,
    max: 9999,
    message: "시야는 보통이에요",
    recommendation: "",
  },
  {
    min: 1000,
    max: 3999,
    message: "시야가 흐릿해요",
    recommendation: "시야가 흐릿하니 주위를 잘 살피세요 🌫️",
  },
  {
    min: 0,
    max: 999,
    message: "시야가 안보여요",
    recommendation: "😶‍🌫️ 시야가 많이 흐려 외출시 안전에 유의해요 ⚠️",
  },
];

export const getVisibilityMessageRec = (visibility) => {
  for (const { min, max, message, recommendation } of visibilityRules) {
    if (visibility >= min && visibility <= max) {
      return { message, recommendation };
    }
  }
  return { message: null, recommendation: null };
};
