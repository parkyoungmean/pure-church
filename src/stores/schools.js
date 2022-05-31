import { defineStore } from "pinia";

import axios from "axios";

import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko"); // global로 한국어 locale 사용

export const useSchoolStore = defineStore("school", {
  state: () => ({
    school_mode: "read",
    schools: [
      {
        id: "01",
        title: "복음 학교",
        subtitle: "복된 사람들, 복음을 되짚다",
        img: "https://i.imgur.com/UyimOMY.jpg",
        description:
          "성경의 모든 이야기는 인류의 구원자요 영원한 왕이신 예수 그리스도로 향해 있습니다. <br> 《복음 학교》는 성경이 어떻게 예수님과 연결되어 있는지, 우리 삶이 예수님을 중심으로 하나님의 구원 계획에 어떻게 연결되어야 하는지 구체적으로 제시합니다.",
        curriculum:
          "1강  복음으로의 초대 <br> 2강  그래서 구원입니다. <br> 3강  그래서 길입니다. <br> 4강  그래서 빛입니다. <br> 5강  이것이 부흥입니다. <br> 6강  복음의 축복 <br> 7강  성령과 기도 <br> 8강  복음과 디아스포라",
        registration: 70,
        graduate: 67,
        color: {
          bgColor: "bg-amber-200",
          gradientColor: "to-amber-600",
          textGradientColor: "to-amber-600/20",
          titleColor: "text-amber-900",
          subtitleColor: "text-amber-800",
        },
      },
      {
        id: "02",
        title: "치유(The Day) 학교",
        subtitle: "하나님 나라의 회복과 능력",
        img: "https://i.imgur.com/xUc8v0t.jpg",
        description:
          "십자가의 은혜와 구원 받은 그리스도인들이 왜 우울함과 육체적 정신적 마음의 질병을 경험하며 두려워하며 사는가? <br> 이 모든 질문을 무의식, 죄 선악, 생명, 빛 성령 등의 연관 관계를 통해 성경 안에서 밝히며 하나님의 완전한 생명의 빛 안에 머무를 수 있는 길을 제시해드립니다.",
        curriculum:
          "1강  '선善'의 이동(변질의 서막) <br> 2강  두 보호자_1(그들의 일, 우리의 반응) <br> 3강  두 보호자_2(그들의 일, 우리의 관계) <br> 4강  두 보호자_3(그들의 일, 우리의 몸) <br> 5강  막다른 길에서_1(절대 옳은 자의 몸부림) <br> 6강  막다른 길에서_2(절대 옳은 자의 피난처) <br> 7강 법적 소유권(볕을 쐬다) <br> 8강 모든 것이 끝나버리기 전에(선택의 동반)",
        registration: 300,
        graduate: 259,
        color: {
          bgColor: "bg-orange-200",
          gradientColor: "to-orange-600",
          textGradientColor: "to-orange-600/20",
          titleColor: "text-orange-900",
          subtitleColor: "text-orange-800",
        },
      },
      {
        id: "03",
        title: "친밀감(Kar) 학교",
        subtitle: "두드리다, 머물다, 회복하다",
        img: "https://i.imgur.com/C52zbsi.jpg",
        description:
          "KAR(카르)은 마음이란 뜻의 라틴어로, 다음 세 단어의 약자입니다. <br> 1) konck: 두드리다 2) abide: 머물다 3) recover: 회복하다. <br><br> 하나님과 우리의 호흡이 느껴질 만큼 가까이에서 얼굴을 마주하여 그 마음을 함께 나눔으로 하나님 아버지와 더 깊은 친밀감으로 인도되는 시간이 될 것입니다.",
        curriculum:
          "1강  바라보다 <br> 2강  그 앞에 나타나다 <br> 3강  나란히 서서 <br> 4강  부르다 <br> 5강  안개를 걷어내며 <br> 6강  그것이 그의 일입니다 <br> 7강 향기가 되어",
        registration: 150,
        graduate: 120,
        color: {
          bgColor: "bg-rose-200",
          gradientColor: "to-rose-600",
          textGradientColor: "to-rose-600/20",
          titleColor: "text-rose-900",
          subtitleColor: "text-rose-800",
        },
      },
      {
        id: "04",
        title: "능력의 기도(BAP) 학교",
        subtitle: "참된 영적 전쟁과 승리",
        img: "https://i.imgur.com/dPErD5s.jpg",
        description:
          "《능력의 기도(BAP) 학교》는 기도의 삶과 영적인 삶의 향상을 돕기 위한 학교입니다. 교회와 관련된 모든 사역을 위한 영적 힘이 되도록 기도로 돕습니다.",
        curriculum:
          "1강  중보기도-교회의 생명줄 <br> 2강  기도-영혼의 호흡 <br> 3강  기도동역자-교회를 지키는 파수꾼 <br> 4강  중보-신자의 의무요 성령의 은사 <br> 5강  동역-연합과 일치가 승리의 비결 <br> 6강  중보기도 사역의 비전 <br> 7강  중보기도 사역의 전략 <br> 8강  기도와 성화",
        registration: 40,
        graduate: 20,
        color: {
          bgColor: "bg-fuchsia-200",
          gradientColor: "to-fuchsia-600",
          textGradientColor: "to-fuchsia-600/20",
          titleColor: "text-fuchsia-900",
          subtitleColor: "text-fuchsia-800",
        },
      },
      {
        id: "05",
        title: "사랑 학교",
        subtitle: "사랑은 오래참고 온유하며",
        img: "https://i.imgur.com/XTEusLc.jpg",
        description:
          "《사랑 학교》는 지금까지 알아왔던 하나님의 사랑을 새로운 차원의 시각으로 바라보게 하고 그 분의 사랑 가운데 동행하는 삶을 도전하게 하는 학교입니다.<br> 대상: 하나님 아버지의 사랑을 만나 깊은 사랑과 회복을 소망하는 모든 그리스도인",
        curriculum:
          "1강  사랑은 오래 참고 <br> 2강  사랑은 온유하며 <br> 3강  사랑은 시기하지 아니하며 <br> 4강  사랑은 자랑하지 아니하며 <br> 5강  사랑은 교만하지 아니하며 <br> 6강  사랑은 무례히 행하지 아니하며 <br> 7강 사랑은 자기 유익을 구하지 아니하며 <br> 8강 사랑은 성내지 아니하며",
        registration: 30,
        graduate: 20,
        color: {
          bgColor: "bg-pink-200",
          gradientColor: "to-pink-600",
          textGradientColor: "to-pink-600/20",
          titleColor: "text-pink-900",
          subtitleColor: "text-pink-800",
        },
      },
      {
        id: "06",
        title: "사역자 학교",
        subtitle: "충성되이 여겨 내게 직분을 맡기심이니",
        img: "https://i.imgur.com/LRbjgMF.jpg",
        description:
          "《사역자 학교》는 하나님을 사랑하여 그 분께서 맡기신 직분을 충성되이 감당하기 원하는 사역자 분들을 위한 학교입니다.<br><br> 대상: 하나님 아버지의 사랑에 감격하여 맡기신 직분을 소중히 여기어 잘 감당하기를 소망하는 모든 그리스도인 사역자",
        curriculum:
          "1강  목회 양육의 이해 <br> 2강  목회 양육의 실제 <br> 3강  한국 교회의 목회 방향 이해 <br> 4강  지역 교회의 역사 및 토양적 이해  <br> 5강  동역자로서의 바람직한 이해 <br> 6강  영적 리더쉽 <br> 7강 소명과 현실 사이 <br> 8강 미래에 대한 성경적인 목회 답변",
        registration: 100,
        graduate: 80,
        color: {
          bgColor: "bg-blue-200",
          gradientColor: "to-blue-600",
          textGradientColor: "to-blue-600/20",
          titleColor: "text-blue-900",
          subtitleColor: "text-blue-800",
        },
      },
    ],
    schoolSeries: [
      {
        title: "온라인 치유학교 5기",
        background:
          "https://pbs.twimg.com/media/DqRkUGmUcAA9cZT?format=jpg&name=large",
        bgColor: "bg-orange-200",
        createdAt: "2주 전",
        status: "open",
        term: {
          start: "2022.03.28",
          end: "2022.05.16",
        },
        time: "매주 화요일 저녁6시",
      },
      {
        title: "온라인 치유학교 4기",
        background:
          "https://pbs.twimg.com/media/FRakvHPVUAEFSTa?format=jpg&name=large",
        bgColor: "bg-orange-200",
        createdAt: "2주 전",
        status: "closed",
        term: {
          start: "2021.11.16",
          end: "2022.01.09",
        },
        time: "매주 화요일 저녁6시",
      },
      {
        title: "온라인 치유학교 3기",
        background:
          "https://pbs.twimg.com/media/D6NJXX6WkAYr8OC?format=jpg&name=medium",
        bgColor: "bg-orange-200",
        createdAt: "2주 전",
        status: "closed",
        term: {
          start: "2021.03.16",
          end: "2021.05.04",
        },
        time: "매주 화요일 저녁6시",
      },
      {
        title: "강남 치유학교",
        avatar: "",
        background:
          "https://pbs.twimg.com/media/FA4g4w7WEAAdmb4?format=jpg&name=large",
        bgColor: "bg-orange-200",
        createdAt: "2주 전",
        status: "closed",
        term: {
          start: "2021.08.24",
          end: "2021.10.12",
        },
        time: "매주 화요일 저녁6시",
      },
    ],
    currentSchool: [],
  }),
  getters: {
    async getSchools(state) {
      return state.schools;
    },
    getSchoolSeries(state) {
      return state.schoolSeries;
    },
    getCurrentSchool(state) {
      return state.currentSchool;
    },
  },
  actions: {
    schoolMode(dir = null) {
      if (dir === "create") {
        this.school_mode = "create";
      } else if (dir === "read") {
        this.school_mode = "read";
      } else {
        this.school_mode = "update";
      }
    },
    /* select Current School */
    async selectedSchool(state, payload) {
      if (payload != "undefined" && payload != null) {
        const index = this.schools.findIndex(
          (element) => element.id === payload
        );
        this.currentSchool = this.schools[index];
      }
    },
  },
});
