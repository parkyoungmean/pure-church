import { defineStore } from "pinia";

import axios from "axios";

import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko"); // global로 한국어 locale 사용

export const useSchoolStore = defineStore("school", {
  state: () => ({
    school_mode: "none",
    schools: [],
    currentSchool: [],
    schoolSeries: [
      {
        name: "온라인 치유학교 5기",
        background:
          "https://pbs.twimg.com/media/DqRkUGmUcAA9cZT?format=jpg&name=large",
        bgColor: "orange",
        createdAt: "2주 전",
        status: "open",
        term: {
          start: "2022.03.28",
          end: "2022.05.16",
        },
        time: "매주 화요일 저녁6시",
      },
      {
        name: "온라인 치유학교 4기",
        background:
          "https://pbs.twimg.com/media/FRakvHPVUAEFSTa?format=jpg&name=large",
        bgColor: "orange",
        createdAt: "2주 전",
        status: "closed",
        term: {
          start: "2021.11.16",
          end: "2022.01.09",
        },
        time: "매주 화요일 저녁6시",
      },
      {
        name: "온라인 치유학교 3기",
        background:
          "https://pbs.twimg.com/media/D6NJXX6WkAYr8OC?format=jpg&name=medium",
        bgColor: "orange",
        createdAt: "2주 전",
        status: "closed",
        term: {
          start: "2021.03.16",
          end: "2021.05.04",
        },
        time: "매주 화요일 저녁6시",
      },
      {
        name: "강남 치유학교",
        avatar: "",
        background:
          "https://pbs.twimg.com/media/FA4g4w7WEAAdmb4?format=jpg&name=large",
        bgColor: "orange",
        createdAt: "2주 전",
        status: "closed",
        term: {
          start: "2021.08.24",
          end: "2021.10.12",
        },
        time: "매주 화요일 저녁6시",
      },
    ],
  }),
  getters: {
    getSchools(state) {
      console.log("위치: getters/getSchools");
      return state.schools;
    },
    getCurrentSchool(state) {
      console.log("위치: getters/getCurrentSchool");
      return state.currentSchool;
    },
    getSchoolSeries(state) {
      console.log("위치: getters/getSchoolSeries");
      return state.schoolSeries;
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
    async selectedSchool(payload) {
      console.log("위치: selectedSchool");

      const index = this.schools.findIndex((element) => element.id === payload);
      this.currentSchool = this.schools[index];
    },
    /* Create */
    async createSchool(payload) {
      console.log("위치: createSchools");
      try {
        await axios
          .post("https://pure-api.herokuapp.com/school/createSchool", {
            /* await axios.post("http://localhost:4000/school/createSchool", { */
            name: payload.name,
            subtitle: payload.subtitle,
            color: {
              bgColor: `bg-${payload.color}-200`,
              gradientColor: `to-${payload.color}-600`,
              textGradientColor: `to-${payload.color}-600/20`,
              nameColor: `text-${payload.color}-900`,
              subtitleColor: `text-${payload.color}-800`,
            },
            description: payload.description || "",
            curriculum: payload.curriculum || [],
            registration: "0",
            graduate: "0",
            img: payload.img || "https://imgur.com/KddmMij",
            createdAt: dayjs(),
            updatedAt: "1000-01-01T00:00:00.000Z",
            bookmark: "",
          })
          .then((res) => {
            console.log("New School:", res.data);

            let school = {
              id: res.data.id,
              name: payload.name,
              subtitle: payload.subtitle,
              color: {
                origin: payload.color,
                bgColor: `bg-${payload.color}-200`,
                gradientColor: `to-${payload.color}-600`,
                textGradientColor: `to-${payload.color}-600/20`,
                nameColor: `text-${payload.color}-900`,
                subtitleColor: `text-${payload.color}-800`,
              },
              description: payload.description || "",
              curriculum: payload.curriculum || [],
              registration: "0",
              graduate: "0",
              img: payload.img || "https://imgur.com/KddmMij",
              createdAt: res.data.created_time,
              convertedAt: dayjs(payload.createdAt).format("YYYY년 MM월 DD일"),
              updatedAt: "1000-01-01T00:00:00.000Z",
              bookmark: res.data.properties.Bookmark.rich_text[0].text.content,
            };
            console.log("payload:", school);

            this.schools.unshift(school);
            this.currentSchool = school;

            alert("새 학교 등록 성공!");
          });
      } catch (error) {
        alert("새 학교 등록이 실패하였습니다.ㅜㅜ");
        console.error("New School's Create 에러:", error);
      }
    },
    /* Read */
    async fetchSchools() {
      try {
        const data = await axios.get('https://pure-api.herokuapp.com/school')
        /* const data = await axios.get("http://localhost:4000/school/"); */
        console.log(data.data);

        let schoolsArray = [];

        data.data.forEach((v) => {
          let school = v;

          schoolsArray.push({
            id: school.id,
            name: school.Name,
            subtitle: school.Subtitle,
            img: school.Img,
            description: school.Description,
            curriculum: JSON.parse(school.Curriculum),
            registration: school.Registration,
            graduate: school.Graduate,
            color: JSON.parse(school.Color),
            createdAt: school.CreatedAt,
            convertedAt: dayjs(school.CreatedAt).format("YYYY년 MM월 DD일"),
            updatedAt: school.UpdatedAt,
            bookmark: school.Bookmark,
            status: school.Status,
          });
        });
        this.schools = schoolsArray;
        this.currentSchool = schoolsArray[0];
      } catch (error) {
        console.error(error);
      }
    },
    /* Updade */
    async updateSchool(payload) {
      try {
        await axios.post('https://pure-api.herokuapp.com/school/updateSchool', {
        /* await axios
          .post("http://localhost:4000/school/updateSchool", { */
            id: payload.id,
            name: payload.name,
            subtitle: payload.subtitle,
            color: {
              origin: payload.color.origin,
              bgColor: `bg-${payload.color.origin}-200`,
              gradientColor: `to-${payload.color.origin}-600`,
              textGradientColor: `to-${payload.color.origin}-600/20`,
              nameColor: `text-${payload.color.origin}-900`,
              subtitleColor: `text-${payload.color.origin}-800`,
            },
            description: payload.description || "",
            curriculum: payload.curriculum || [],
            registration: payload.registration,
            graduate: payload.graduate,
            img: payload.img || "https://imgur.com/KddmMij",
            createdAt: payload.createdAt,
            updatedAt: dayjs(),
            bookmark: payload.bookmark,
          })
          .then((res) => {
            console.log("data:", res.data);

            let school = {
              id: payload.id,
              name: payload.name,
              subtitle: payload.subtitle,
              color: {
                origin: payload.color.origin,
                bgColor: `bg-${payload.color.origin}-200`,
                gradientColor: `to-${payload.color.origin}-600`,
                textGradientColor: `to-${payload.color.origin}-600/20`,
                nameColor: `text-${payload.color.origin}-900`,
                subtitleColor: `text-${payload.color.origin}-800`,
              },
              description: payload.description || "",
              curriculum: payload.curriculum || [],
              registration: payload.registration,
              graduate: payload.graduate,
              img: payload.img || "https://imgur.com/KddmMij",
              createdAt: res.data.created_time,
              convertedAt: dayjs(payload.createdAt).format("YYYY년 MM월 DD일"),
              updatedAt: dayjs(),
              bookmark: payload.bookmark,
            };
            console.log("school:", school);
            console.log("학교의 정보가 수정되었습니다.");

            const index = this.schools.findIndex(
              (element) => element.id === payload.id
            );
            
            this.schools[index] = school;
            this.currentSchool = school;

            alert("학교 정보 수정 성공!");
          });
      } catch (error) {
        alert("학교 정보의 수정이 실패하였습니다ㅜㅜ");
        console.error("School's Update 에러:", error);
      }
    },
    /* Delete */
    async deleteSchool(payload) {
      try {
        await axios.post('https://pure-api.herokuapp.com/school/deleteSchool', {
        /* await axios
          .post("http://localhost:4000/school/deleteSchool", { */
            id: payload.id,
          })
          .then((res) => {
            console.log("data:", res.data);
            
            const index = this.schools.findIndex(
              (element) => element.id === payload.id
            );
            console.log('인덱스?', index);
            this.schools.splice(index, 1);
            console.log(this.schools.length);

            if (this.schools.length === 0) {
              this.currentSchool = []
            } else if (this.schools.length-1 < index) {
              this.currentSchool = this.schools[index-1];
            } else {
              this.currentSchool = this.schools[index];
            }
            
            
            console.log("학교의 정보가 삭제되었습니다.");
            alert("학교 정보 삭제 성공!");
          });
      } catch (error) {
        alert("학교 정보의 삭제가 실패하였습니다ㅜㅜ");
        console.error("School's Delete 에러:", error);
      }
    },
  },
});
