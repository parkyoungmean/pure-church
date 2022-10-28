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
    }),
    getters: {
    },
    actions: {
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
    }
})