import { defineStore } from "pinia";

import axios from "axios";

import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko"); // global로 한국어 locale 사용

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
});

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

                /* await axios.post("https://pure-api.herokuapp.com/publicity/createPublicity", payload) */
                await instance.post("publicity/createPublicity", payload)
                .then((res) => {
                    console.log("new Publicity:", res.data);

                    let publicity = {
                        id: res.data.id,
                        img: JSON.stringify(payload.bgImg),
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
        },
        /* read Slide Publicitys */
        async fetchPublicitys() {
            try {
                /* const data = await axios.get('https://pure-api.herokuapp.com/publicity') */
                const data = await instance("publicity")

                console.log(data.data);

                let publicitysArray = [];

                data.data.forEach((v) => {
                    let publicity = v;

                    /* img 뒤에 .jpg를 붙일지 여부 결정 */
                    if (publicity.Img.indexOf('imgur.com') ===-1) {  // 단어가 없으면
                        console.log('없다');
                    } else {
                      console.log('있다');
                      publicity.Img = `${publicity.Img}.jpg`;
                    }

                    publicitysArray.push({
                        id: publicity.id,
                        img: publicity.Img,
                        title: publicity.Title,
                        subtitle: publicity.Subtitle,
                        description: publicity.Content,
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
                this.publicitys = publicitysArray;

            } catch (error) {
                console.error(error);
            }
        },
    }
})