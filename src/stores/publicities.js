import { defineStore } from "pinia";

import axios from "axios";

import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko"); // global로 한국어 locale 사용

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

export const usePublicityStore = defineStore("publicity", {
  state: () => ({
    publicities: [],
    currentPublicity: [],
  }),
  getters: {
    getPublicities(state) {
      return state.publicities;
    },
    getCurrentPublicity(state) {
      return state.currentPublicity;
    },
  },
  actions: {
    /* select Current School */
    async selectedPublicity(payload) {
      const index = this.publicities.findIndex(
        (element) => element.id === payload
      );
      this.currentPublicity = this.publicities[index];
    },
    /* create Slide Publicity */
    async createPublicity(payload) {
      try {
        payload.createdAt = dayjs().add(9, "hour");
        payload.updatedAt = "1000-01-01T00:00:00.000";

        await instance
          .post("publicity/createPublicity", payload)
          .then((res) => {
            console.log("new Publicity:", res.data);

            alert("새 슬라이드 광고 등록 성공!");
          });
      } catch (error) {
        alert("새 슬라이드 광고 등록이 실패하였습니다.ㅜㅜ");
        console.error("New Slide Publicity's Create 에러:", error);
      }
    },
    /* read Slide Publicities */
    async fetchPublicities() {
      try {
        const data = await instance("publicity");

        console.log(data.data);

        let publicitiesArray = [];

        data.data.forEach((v) => {
          let publicity = v;

          publicity.Img = JSON.parse(publicity.Img);

          /* img 뒤에 .jpg를 붙일지 여부 결정 */
          if (publicity.Img.link.indexOf("imgur.com") === -1) {
            // 단어가 없으면
          } else {
            publicity.Img.link = `${publicity.Img.link}.jpg`;
          }

          if (publicity.MobileImg) {
            publicity.MobileImg = JSON.parse(publicity.MobileImg);

            /* img 뒤에 .jpg를 붙일지 여부 결정 */
            if (publicity.MobileImg.link.indexOf("imgur.com") === -1) {
              // 단어가 없으면
            } else {
              publicity.MobileImg.link = `${publicity.MobileImg.link}.jpg`;
            }
          }

          publicitiesArray.push({
            id: publicity.id,
            img: publicity.Img,
            mobileImg: publicity.MobileImg,
            title: publicity.Title,
            subtitle: publicity.Subtitle,
            description: publicity.Content,
            position: JSON.parse(publicity.Position),
            color: JSON.parse(publicity.Color),
            size: JSON.parse(publicity.Size),
            condition: publicity.Condition,
            belong: publicity.Belong,
            author: publicity.Author,
            createdAt: publicity.CreatedAt,
            convertedAt: dayjs(publicity.CreatedAt).format("YYYY년 MM월 DD일"),
            updatedAt: publicity.UpdatedAt,
            status: publicity.Status,
          });
        });
        this.publicities = publicitiesArray;
      } catch (error) {
        console.error(error);
      }
    },

    /* udpate Slide Publicity */
    async updatePublicity(payload) {
      try {
        payload.updatedAt = dayjs().add(9, "hour");

        await instance
          .post("publicity/updatePublicity", payload)
          .then((res) => {
            console.log("Publicity:", res.data);

            alert("슬라이드 광고 내용 수정 성공!");
          });
      } catch (error) {
        alert("슬라이드 광고 내용 수정이 실패하였습니다.ㅜㅜ");
        console.error("Slide Publicity's Update 에러:", error);
      }
    },

    /* Delete Slide Publicity */
    async deletePublicity(payload) {
      try {
        await instance
          .post("publicity/deletePublicity", {
            id: payload,
          })
          .then((res) => {
            console.log("data:", res.data);

            const index = this.publicities.findIndex(
              (element) => element.id === payload
            );

            console.log("인덱스?", index);

            this.publicities.splice(index, 1);

            console.log(this.publicities.length);

            if (this.publicities.length === 0) {
              this.currentPublicity = [];
            } else if (this.publicities.length - 1 < index) {
              this.currentPublicity = this.publicities[index - 1];
            } else {
              this.currentPublicity = this.publicities[index];
            }

            console.log("슬라이드 광고의 정보가 삭제되었습니다.");
            alert("슬라이드 광고 삭제 성공!");
          });
      } catch (error) {
        alert("슬라이드 광고의 삭제가 실패하였습니다ㅜㅜ");
        console.error("Publicity's Delete 에러01:", error);
      }
    },
  },
});
