import { defineStore } from "pinia";

import axios from "axios";

import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko"); // global로 한국어 locale 사용

export const useNoticeStore = defineStore("notice", {
    state: () => ({
        publicitys: [],
    }),
    getters: {
        getPublicitys(state) {
            return state.publicitys;
        },
    },
    actions: {
        /* create Slide Publicity */
        async createPublicity(payload) {
            try {
                payload.createdAt = dayjs();
                payload.updatedAt = "1000-01-01T00:00:00.000Z";

                await axios.post("https://pure-api.herokuapp.com/publicity/createPublicity", payload)
                /* await axios.post("http://localhost:4000/publicity/createPublicity", payload) */
                .then((res) => {
                    console.log("new Publicity:", res.data);

                    let publicity = {
                        id: res.data.id,
                        img: payload.bgImg,
                        title: payload.title,
                        subtitle: payload.subtitle,
                        description: payload.description,
                        /* 글자 크기 */
                        size: payload.size,
                        /* 글자 색상 */
                        color: payload.color,
                        condition: payload.condition,
                        author: res.data.author,
                        createdAt: res.data.created_time,
                        convertedAt: dayjs(payload.createdAt).format("YYYY년 MM월 DD일"),
                        updatedAt: payload.updatedAt,
                    }

                    this.publicitys.unshift(publicity);
                    alert("새 슬라이드 광고 등록 성공!");
                })
            } catch (error) {
                alert("새 슬라이드 광고 등록이 실패하였습니다.ㅜㅜ");
                console.error("New Slide Publicity's Create 에러:", error);
            }
        }
    }
})