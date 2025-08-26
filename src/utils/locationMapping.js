export const locationMapping = {
  // 불일치 지역
  광명: { apiName: "Kwangmyŏng", cityName: "광명", uiName: "광명" }, // 시
  양주: { apiName: "Ganeung i dong", cityName: "의정부", uiName: "양주" }, // 시
  의정부: { apiName: "Ganeung i dong", cityName: "의정부", uiName: "의정부" }, // 시
  평창: { apiName: "Pŏdŭlbat", cityName: "춘천", uiName: "평창" }, // 군
  정선: { apiName: "Pŏdŭlbat", cityName: "춘천", uiName: "정선" }, // 군
  영월: { apiName: "Neietsu", cityName: "영월", uiName: "영월" }, // 군
  횡성: { apiName: "Hup’yŏng", cityName: "춘천", uiName: "횡성" }, // 군
  태백: { apiName: "T’aebaek", cityName: "태백", uiName: "태백" }, // 시
  포천: { apiName: "Hwangmae", cityName: "포천", uiName: "포천" }, // 시
  연천: { apiName: "Yeoncheon-gun", cityName: "연천", uiName: "연천" }, // 군
  단양: { apiName: "Oegeomusil", cityName: "제천", uiName: "단양" }, // 군
  금산: { apiName: "Kinzan", cityName: "대전", uiName: "금산" }, // 군
  진안: { apiName: "Seryui-dong", cityName: "전주", uiName: "진안" }, // 군
  고창: { apiName: "Koch'ang", cityName: "고창", uiName: "고창" }, // 군
  완주: { apiName: "Songch’ŏni-dong", cityName: "전주", uiName: "완주" }, // 군
  영암: { apiName: "Yeongam-guncheong", cityName: "영암", uiName: "영암" }, // 군
  함평: {
    apiName: "Hampyeongsaengtaegongwon",
    cityName: "함평",
    uiName: "함평",
  }, // 군
  장흥: { apiName: "Ganeung i dong", cityName: "순천", uiName: "장흥" }, // 군
  고흥: { apiName: "Koyo", cityName: "여수", uiName: "고흥" }, // 군
  장성: { apiName: "Koch'ang", cityName: "광주", uiName: "장성" }, // 군
  담양: {
    apiName: "Sunchang-chodeunghakgyo",
    cityName: "광주",
    uiName: "담양",
  }, // 군
  영양: { apiName: "Utt’ŏ-gol", cityName: "영양", uiName: "영양" }, // 군
  영덕: { apiName: "Yeongtongi-dong", cityName: "예천", uiName: "영덕" }, // 군
  울진: { apiName: "Ulchin", cityName: "울진", uiName: "울진" }, // 군
  청송: { apiName: "Cheongsong gun", cityName: "청송", uiName: "청송" }, // 군

  // 인근지역 또는 좌표 조정
  세종: { apiName: "Gongju", cityName: "세종시", uiName: "세종" }, // 시
  공주: { apiName: "Gongju", cityName: "공주", uiName: "공주" }, // 시
  제주: { apiName: "Jeju City", cityName: "제주", uiName: "제주" }, // 시
  서귀포: { apiName: "Jeju-do", cityName: "서귀포", uiName: "서귀포" }, // 시
  수원: { apiName: "Namhyang-dong", cityName: "수원", uiName: "수원" }, // 시
  청주: { apiName: "Cheongju-si", cityName: "청주", uiName: "청주" }, // 시
  고양: { apiName: "Goyang-si", cityName: "고양", uiName: "고양" }, // 시
  용인: { apiName: "Samga-dong", cityName: "용인", uiName: "용인" }, // 시
  성남: { apiName: "Seongnam-si", cityName: "성남", uiName: "성남" }, // 시
  부천: { apiName: "Bucheon-si", cityName: "부천", uiName: "부천" }, // 시
  김포: { apiName: "Gimpo-si", cityName: "김포", uiName: "김포" }, // 시
  화성: { apiName: "Hwaseong-si", cityName: "화성", uiName: "화성" }, // 시
  안양: { apiName: "Gunpo", cityName: "군포", uiName: "안양" }, // 시
  고성: { apiName: "Gapyeong County", cityName: "속초", uiName: "고성" }, // 군
  가평: { apiName: "Gapyeong County", cityName: "가평", uiName: "가평" }, // 군
  의령: { apiName: "Gyeongsangnam-do", cityName: "창녕", uiName: "의령" }, // 군

  // 일치 지역
  서울: { apiName: "Seoul", cityName: "서울", uiName: "서울" }, // 시
  부산: { apiName: "Busan", cityName: "부산", uiName: "부산" }, // 시
  인천: { apiName: "Incheon", cityName: "인천", uiName: "인천" }, // 시
  광주: { apiName: "Gwangju", cityName: "광주", uiName: "광주" }, // 시
  대전: { apiName: "Daejeon", cityName: "대전", uiName: "대전" }, // 시
  대구: { apiName: "Daegu", cityName: "대구", uiName: "대구" }, // 시
  울산: { apiName: "Ulsan", cityName: "울산", uiName: "울산" }, // 시
  창원: { apiName: "Changwon", cityName: "창원", uiName: "창원" }, // 시
  전주: { apiName: "Jeonju", cityName: "전주", uiName: "전주" }, // 시
  천안: { apiName: "Cheonan", cityName: "천안", uiName: "천안" }, // 시
  김해: { apiName: "Gimhae", cityName: "김해", uiName: "김해" }, // 시
  아산: { apiName: "Asan", cityName: "아산", uiName: "아산" }, // 시
  포항: { apiName: "Pohang", cityName: "포항", uiName: "포항" }, // 시
  김천: { apiName: "Gimcheon", cityName: "김천", uiName: "김천" }, // 시
  익산: { apiName: "Iksan", cityName: "익산", uiName: "익산" }, // 시
  파주: { apiName: "Paju", cityName: "파주", uiName: "파주" }, // 시
  경주: { apiName: "Gyeongju", cityName: "경주", uiName: "경주" }, // 시
  제천: { apiName: "Jecheon", cityName: "제천", uiName: "제천" }, // 시
  남양주: { apiName: "Namyangju", cityName: "남양주", uiName: "남양주" }, // 시
  양산: { apiName: "Yangsan", cityName: "양산", uiName: "양산" }, // 시
  상주: { apiName: "Sangju", cityName: "상주", uiName: "상주" }, // 시
  영주: { apiName: "Yeongju", cityName: "영주", uiName: "영주" }, // 시
  안동: { apiName: "Andong", cityName: "안동", uiName: "안동" }, // 시
  마산: { apiName: "Masan", cityName: "마산", uiName: "마산" }, // 시
  밀양: { apiName: "Miryang", cityName: "밀양", uiName: "밀양" }, // 시
  창녕: { apiName: "Changnyeong", cityName: "창녕", uiName: "창녕" }, // 시
  남해: { apiName: "Namhae", cityName: "남해", uiName: "남해" }, // 군
  함양: { apiName: "Hamyang", cityName: "함양", uiName: "함양" }, // 군
  진주: { apiName: "Jinju", cityName: "진주", uiName: "진주" }, // 시
  해남: { apiName: "Haenam", cityName: "해남", uiName: "해남" }, // 군
  화천: { apiName: "Hwacheon", cityName: "화천", uiName: "화천" }, // 군
  양구: { apiName: "Yanggu", cityName: "양구", uiName: "양구" }, // 군
  인제: { apiName: "Inje", cityName: "인제", uiName: "인제" }, // 군
  강릉: { apiName: "Gangneung", cityName: "강릉", uiName: "강릉" }, // 시
  속초: { apiName: "Sokcho", cityName: "속초", uiName: "속초" }, // 시
  삼척: { apiName: "Samcheok", cityName: "삼척", uiName: "삼척" }, // 시
  여주: { apiName: "Yeoju", cityName: "여주", uiName: "여주" }, // 시
  예산: { apiName: "Yesan", cityName: "예산", uiName: "예산" }, // 군
  홍성: { apiName: "Hongseong", cityName: "홍성", uiName: "홍성" }, // 군
  보령: { apiName: "Boryeong", cityName: "보령", uiName: "보령" }, // 시
  무주: { apiName: "Muju", cityName: "무주", uiName: "무주" }, // 군
  임실: { apiName: "Imsil", cityName: "임실", uiName: "임실" }, // 군
  보성: { apiName: "Boseong", cityName: "보성", uiName: "보성" }, // 군
  화순: { apiName: "Hwasun", cityName: "화순", uiName: "화순" }, // 군
  문경: { apiName: "Mungyeong", cityName: "문경", uiName: "문경" }, // 시
  독도: { apiName: "", cityName: "독도", uiName: "독도" }, // 군
};
