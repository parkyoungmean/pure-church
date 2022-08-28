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
        primaryNotices: [],
        currentNotice: [],
    }),
    getters: {
        getNotices(state) {
            return state.notices;
        },
        getPrimaryNotices(state) {
            return state.primaryNotices;
        },
        getCurrentNotice(state) {
            return state.currentNotice;
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
                        primary: payload.primary,
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

                let noticesArray = [];

                data.data.forEach((v) => {
                    let notice = v;

                    notice.Img = JSON.parse(notice.Image);
                    
                    if(Object.keys(notice.Img).length == 0){
                        
                    } else {
                        /* img 뒤에 .jpg를 붙일지 여부 결정 */
                        if (notice.Img.link.indexOf('imgur.com') ===-1) {  // 단어가 없으면
                            
                        } else {
                            notice.Img.link = `${notice.Img.link}.jpg`;
                        }
                    }

                    noticesArray.push({
                        id: notice.id,
                        primary: notice.Primary,
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

        /* read PrimaryNotices */
        async fetchPrimaryNotices() {
            try {
                const data = await instance("notice/getPrimaryNotices")

                let noticesArray = [];

                data.data.forEach((v) => {
                    let notice = v;

                    notice.Img = JSON.parse(notice.Image);
                    
                    if(Object.keys(notice.Img).length == 0){
                        
                    } else {
                        
                        /* img 뒤에 .jpg를 붙일지 여부 결정 */
                        if (notice.Img.link.indexOf('imgur.com') ===-1) {  // 단어가 없으면
                            
                        } else {
                        notice.Img.link = `${notice.Img.link}.jpg`;
                        }
                    }

                    noticesArray.push({
                        id: notice.id,
                        primary: notice.Primary,
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
                this.primaryNotices = noticesArray;

            } catch (error) {
                console.error(error);
            }
        },

        /* update Notice */
        async updateNotice(payload) {
            try {
                payload.updatedAt = dayjs();;

                await instance.post("notice/updateNotice", payload)
                .then((res) => {

                    payload.img = JSON.parse(payload.img),
                    this.currentNotice = payload;

                    alert("공지사항 수정 성공!");
                })
            } catch (error) {
                alert("공지사항 수정이 실패하였습니다.ㅜㅜ");
                console.error("Notice's Update 에러:", error);
            }
        },

        /* Delete Slide Publicity */
        async deleteNotice(payload) {
            try {
                await instance
                    .post("notice/deleteNotice", {
                        id: payload,
                    })
                    .then((res) => {
                    console.log("data:", res.data);
                    
                    console.log("공지사항의 정보가 삭제되었습니다.");
                    alert("공지사항 정보 삭제 성공!");
                    });
            } catch (error) {
                alert("공지사항 정보 삭제가 실패하였습니다ㅜㅜ");
                console.error("Notice's Delete 에러:", error);
            }
        },
    }
})