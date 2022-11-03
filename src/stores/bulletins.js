import { defineStore } from "pinia";

import axios from "axios";

import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko"); // global로 한국어 locale 사용

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
});

export const useBulletinStore = defineStore("bulletin", {
    state: () => ({
        bulletins: null,
        currentBulletin: null,
    }),
    getters: {
    },
    actions: {
        /* select Current Bulletin */
        async selectedBulletin(payload) {
            const index = this.bulletins.findIndex((element) => element.id === payload);
            this.currentBulletin = this.bulletins[index];
        },
        /* create Bulletins */
        async cretaeBulletin(payload) {
            try {
                payload.createdAt = dayjs().add(9, "hour");
                payload.updatedAt = "1000-01-01T00:00:00.000";

                await instance.post("bulletin/createBulletin", payload)
                .then((res) => {
                    console.log("new bulletin:", res.data);

                    let bulletin = {
                        id: res.data.id,
                        imgs01: JSON.parse(payload.imgs01),
                        imgs02: JSON.parse(payload.imgs02),
                        title: payload.title,
                        category: payload.category,
                        belong: payload.belong,
                        createdAt: res.data.created_time,
                        convertedAt: dayjs(payload.createdAt).format("YYYY년 MM월 DD일"),
                        updatedAt: payload.updatedAt,
                    }
                    
                    this.bulletins.unshift(bulletin);
                    alert("주보 등록 성공!");
                })
            } catch (error) {
                alert("새 주보 등록이 실패하였습니다.ㅜㅜ");
                console.error("New Bulletin's Create 에러", error);
            }
        },
        /* read Bulletins */
        async fetchBulletins() {
            try {
                const data = await instance("bulletin")

                let bulletinArray = [];

                data.data.forEach((v) => {
                    let bulletin = v;

                    bulletin.Img01 = JSON.parse(bulletin.Img01);
                    bulletin.Img02 = JSON.parse(bulletin.Img02);

                    bulletinArray.push({
                        id: bulletin.id,
                        imgs: [...bulletin.Img01, ...bulletin.Img02],
                        imgs01: bulletin.Img01,
                        imgs02: bulletin.Img02,
                        title: bulletin.Title,
                        category: bulletin.Category,
                        belong: bulletin.Belong,
                        author: bulletin.Author,
                        createdAt: bulletin.CreatedAt,
                        convertedAt: dayjs(bulletin.CreatedAt).format("YYYY년 MM월 DD일"),
                        updatedAt: bulletin.UpdatedAt,
                        status: bulletin.Status,
                    });
                });
                
                this.bulletins = bulletinArray;

            } catch (error) {
                console.error(error);
            }
        },
        /* update Bulletin */
        async updateBulletin(payload) {
            try {
                payload.updatedAt = dayjs().add(9, "hour");

                await instance.post("bulletin/updateBulletin", payload)
                .then((res) => {
                    console.log("bulletin:", res.data);

                    alert("주보 수정 성공!");
                })
            } catch (error) {
                alert("주보 수정이 실패하였습니다.ㅜㅜ");
                console.error("bulletin's Update 에러:", error);
            }
        },
        /* Delete Bulletin */
        async deleteBulletin(payload) {
            try {
                await instance
                    .post("bulletin/deleteBulletin", {
                        id: payload,
                    })
                    .then((res) => {
                    console.log("data:", res.data);
                    
                    console.log("주보가 삭제되었습니다.");
                    alert("주보 삭제 성공!");
                    });
            } catch (error) {
                alert("주보 삭제가 실패하였습니다ㅜㅜ");
                console.error("Bulletin's Delete 에러:", error);
            }
        },
    }
})