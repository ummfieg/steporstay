const uviRulesMessagesRec = [
  {
    minUvi: 0,
    maxUvi: 2,
    message: "자외선 걱정은 없는 날이에요!",
    recommendation: "햇빛 만끽 🌞",
  },
  {
    minUvi: 3,
    maxUvi: 5,
    message: "자외선이 살짝 있어요",
    recommendation: "모자와 자외선 차단제는 필수!",
  },
  {
    minUvi: 6,
    maxUvi: 7,
    message: "자외선이 강해요",
    recommendation: "🕶️과 👒모자로 자외선 차단해요! ",
  },
  {
    minUvi: 8,
    maxUvi: 10,
    message: "자외선이 매우 강해요",
    recommendation: "긴 소매나, 선크림으로 꼭 자외선을 차단해요!",
  },
  {
    maxUvi: 11,
    message: "자외선 경고에요 조심해요",
    recommendation: "⚠️ 외출을 최소화하고 Stay를 권장해요",
  },
];

// export const getUviRulesMessagesRec =(u)=>{
//     for(let i = 0; i <uviRulesMessagesRec.length ; i++){
//         const {minUvi, maxUvi, message, recommendation} = uviRulesMessagesRec[i];
//         if()
//     }
// }
