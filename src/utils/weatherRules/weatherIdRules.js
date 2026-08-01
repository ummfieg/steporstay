const weatherIdRules = [
  {
    ids: [200, 201, 202],
    recommendation: "낙뢰주의! 큰 나무나 전봇대 근처는 피하세요! 🌩️",
  },
  { ids: [210, 211], recommendation: "천둥쳐요! 놀랄 수 있어요! 😮" },
  { ids: [212], recommendation: "강한 낙뢰에요⚠️ 실내로 대피하세요! 🌩️" },
  { ids: [221], recommendation: "곳곳에 천둥이 칠 수 있어요 ⚡️" },
  {
    ids: [230, 231, 232],
    recommendation: "천둥과 함께 비가 와요! 미끄러우니 조심하세요!",
  },
  { ids: [300, 301, 302], recommendation: "이슬비는 어쩌면 낭만일 까요? " },
  {
    ids: [310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320],
    recommendation: "외출시 우산을 챙겨요! 🌂",
  },
  {
    ids: [321],
    recommendation: "잠깐 소나기가 내릴 수 있으니 우산 챙기세요! ☔️",
  },
  {
    ids: [500, 501],
    recommendation: "밖에 비와요! 나갈 때 우산 꼭 챙겨요! ☔️",
  },
  {
    ids: [502],
    recommendation: "비가 꽤 많이와요. 우산과 손수건을 챙겨요! 🌂🤧",
  },
  {
    ids: [503, 504],
    recommendation: "폭우예요 Stay! 위험하니 창문을 닫고 외출을 자제해요 🪟 ",
  },
  {
    ids: [511],
    recommendation: "비가와서 도로가 얼었으니 이동시 꼭 주의하세요 ❄️ ☔️ ⚠️",
  },
  {
    ids: [520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531],
    recommendation: "강한 소나기로 잠시 실내에서 비를 피해요☔️❗️",
  },
  { ids: [600], recommendation: "밖에 눈이 내립니다아 🌨️" },
  { ids: [601], recommendation: "펑펑 눈이옵니다🌨️ 우산을 챙겨도 좋아요!👍" },
  {
    ids: [602],
    recommendation: "⚠️폭설이에요 길이 미끄러우니 조심 또 조심하세요 🚶🏻 🚘",
  },
  {
    ids: [611, 612],
    recommendation: "바닥이 얼어서 미끄러워요 이동시 넘어짐 주의하세요❗️",
  },
  {
    ids: [613, 614, 615, 616, 617, 618, 619, 620, 621, 622],
    recommendation: "⚠️ 비가 섞인 눈이에요 미끄러운 신발은 피해요!",
  },
  {
    ids: [701, 741],
    recommendation: "시야가 흐릿해요! 마스크 챙기고 운전 조심하세요 🚗😷",
  },
  {
    ids: [711],
    recommendation:
      "공기 중에 연기가 많아요… 호흡기 약한 분은 외출을 피해주세요 🫁",
  },
  {
    ids: [721],
    recommendation: "시야가 뿌예요! 선글라스나 마스크가 도움될 수 있어요 🕶️😷",
  },
  {
    ids: [731, 751, 761],
    recommendation:
      "미세먼지와 모래바람이 날려요! 외출 시 마스크는 필수에요 😷",
  },
  {
    ids: [762],
    recommendation:
      "화산재가 퍼지고 있어요… 창문을 닫고 외출을 자제하세요 🌋🚫",
  },
  {
    ids: [771],
    recommendation:
      "돌풍이 불고 있어요! 야외 활동은 피하고 실내에 머무르세요 🌀🚷",
  },
  {
    ids: [781],
    recommendation:
      "토네이도 경고! 즉시 실내 안전한 곳으로 대피하세요!! 🌪️❗️❗️",
  },
  {
    ids: [800],
    recommendation: "미뤄둔 일을 해볼까요☀️😊",
  },
  {
    ids: [801, 802],
    recommendation: "살짝 구름이 껴있어요 하늘을 봐요 ☁️🚶‍♀️",
  },
  {
    ids: [803, 804],
    recommendation: "흐린 하루예요 🌥️ 조명 ON!",
  },
];

export const getWeatherIdRecommendations = (weatherId) => {
  for (const { ids, recommendation } of weatherIdRules) {
    if (ids.includes(weatherId)) {
      return { recommendation };
    }
  }
  return { recommendation: null };
};
