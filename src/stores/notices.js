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
        notices: [],
        currentNotice: [],
    }),
    getters: {
        getNotices(state) {
            return state.notices;
        },
    },
    actions: {
        /* select Current Notice */
        async selectedNotice(payload) {
            const index = this.notices.findIndex((element) => element.id === payload);
            this.currentNotice = this.notices[index];
        },
        /* create Notice */
        async createNotice(payload) {
            try {
                payload.createdAt = dayjs();
                payload.updatedAt = "1000-01-01T00:00:00.000Z";

                await instance.post("notice/createNotice", payload)
                .then((res) => {
                    console.log("new notice:", res.data);

                    let notice = {
                        id: res.data.id,
                        img: JSON.parse(payload.img),
                        title: payload.title,
                        content: payload.content,
                        condition: payload.condition,
                        belong: payload.belong,
                        author: payload.author,
                        createdAt: res.data.created_time,
                        convertedAt: dayjs(payload.createdAt).format("YYYY년 MM월 DD일"),
                        updatedAt: payload.updatedAt,
                    }

                    this.notices.unshift(notice);
                    alert("공지사항 등록 성공!");
                })
            } catch (error) {
                alert("새 공지사항 등록이 실패하였습니다.ㅜㅜ");
                console.error("New Notice's Create 에러:", error);
            }
        },
        /* read Notices */
        async fetchNotices() {
            try {
                const data = await instance("notice")

                console.log(data.data);

                let noticesArray = [];

                data.data.forEach((v) => {
                    let notice = v;

                    

                    notice.Img = JSON.parse(notice.Image);
                    
                    if(Object.keys(notice.Img).length == 0){
                        console.log('빈 객체다!');
                    } else {
                        console.log('객체다!');
                        /* img 뒤에 .jpg를 붙일지 여부 결정 */
                        if (notice.Img.link.indexOf('imgur.com') ===-1) {  // 단어가 없으면
                            console.log('없다');
                        } else {
                        console.log('있다');
                        notice.Img.link = `${notice.Img.link}.jpg`;
                        }
                    }

                    

                    noticesArray.push({
                        id: notice.id,
                        img: notice.Img,
                        title: notice.Title,
                        content: notice.Content,
                        condition: notice.Condition,
                        belong: notice.Belong,
                        author: notice.Author,
                        createdAt: notice.CreatedAt,
                        convertedAt: dayjs(notice.CreatedAt).format("YYYY년 MM월 DD일"),
                        updatedAt: notice.UpdatedAt,
                        status: notice.Status,
                    });
                });
                this.notices = noticesArray;

            } catch (error) {
                console.error(error);
            }
        },
    }
})