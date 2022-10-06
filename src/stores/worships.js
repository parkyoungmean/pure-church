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
    }
})