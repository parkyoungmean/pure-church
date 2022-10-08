import { defineStore } from "pinia";

import axios from "axios";

import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko"); // global로 한국어 locale 사용

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
});

export const useWorshipStore = defineStore("worship", {
    state: () => ({
        worships: [],
        primaryWorship: [],                 // 최신 주일 예배 동영상
        currentWorship: null,              // 선택된 현재 예배 동영상
        latestWorships: null,               // 최근 예배 동영상 10개
    }),
    getters: {
        getWorships(state) {
            return state.worships;
        },
        getCurrentWorship(state) {
            return state.currentWorship;
        },
    },
    actions: {
        /* select Current Worship */
        async selectedWorship(payload) {
            const index = this.worships.findIndex((element) => element.id === payload);
            this.currentWorship = this.worships[index];
        },
        /* create Worship */
        async createWorship(payload) {
            try {
                payload.createdAt = dayjs().add(9, "hour");
                payload.updatedAt = "1000-01-01T00:00:00.000";

                await instance.post("worship/createWorship", payload)
                .then((res) => {
                    console.log("new worship:", res.data);

                    let worship = {
                        id: res.data.id,
                        originTitle: payload.originTitle,
                        title: payload.title,
                        verse: payload.verse,
                        speaker: payload.speaker,
                        ytUrl: payload.ytUrl,
                        videoId: payload.videoId,
                        belong: payload.belong,
                        author: payload.author,
                        color: payload.color,
                        pbDate: payload.pbDate,
                        createdAt: res.data.created_time,
                        convertedAt: dayjs(payload.createdAt).format("YYYY년 MM월 DD일"),
                        updatedAt: payload.updatedAt,
                    }

                    this.worships.unshift(worship);
                    alert("예배 데이터 등록 성공!");
                })
            } catch (error) {
                alert("새 예배 데이터 등록이 실패하였습니다.ㅜㅜ");
                console.error("New Worship's Create 에러:", error);
            }
        },
        /* read Worship */
        async fetchWorship() {
            try {
                const data = await instance("worship")

                let worshipArray = [];

                data.data.forEach((v) => {
                    let worship = v;

                    worship.Img01 = JSON.parse(worship.Img01);
                    worship.Img02 = JSON.parse(worship.Img02);

                    worshipArray.push({
                        id: worship.id,
                        imgs: [...worship.Img01, ...worship.Img02],
                        imgs01: worship.Img01,
                        imgs02: worship.Img02,
                        title: worship.Title,
                        category: worship.Category,
                        belong: worship.Belong,
                        author: worship.Author,
                        createdAt: worship.CreatedAt,
                        convertedAt: dayjs(worship.CreatedAt).format("YYYY년 MM월 DD일"),
                        updatedAt: worship.UpdatedAt,
                        status: worship.Status,
                    });
                });
                this.worshipImages = worshipArray;

            } catch (error) {
                console.error(error);
            }
        },
        /* update Worship */
        async updateWorship(payload) {
            try {
                payload.updatedAt = dayjs();

                await instance.post("worship/updateWorship", payload)
                .then((res) => {
                    console.log("Worship:", res.data);

                    alert("예배 데이터 수정 성공!");
                })
            } catch (error) {
                alert("새 예배 데이터 수정이 실패하였습니다.ㅜㅜ");
                console.error("Worship's Update 에러:", error);
            }
        },
        /* Delete Worship */
        async deleteWorship(payload) {
            try {
                await instance
                    .post("worship/deleteWorship", {
                        id: payload,
                    })
                    .then((res) => {
                    console.log("data:", res.data);
                    
                    console.log("예배 데이터가 삭제되었습니다.");
                    alert("예배 데이터 삭제 성공!");
                    });
            } catch (error) {
                alert("예배 데이터 삭제가 실패하였습니다ㅜㅜ");
                console.error("Worship's Delete 에러:", error);
            }
        },
    }
})