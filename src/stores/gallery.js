import { defineStore } from "pinia";

import axios from "axios";

import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko"); // global로 한국어 locale 사용

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
});

export const useGalleryStore = defineStore("gallery", {
    state: () => ({
        galleryImages: null,
        currentGallery: null,
        currentImage: [],
    }),
    getters: {
        getGallery(state) {
            return state.galleryImages;
        },
        getCurrentGallery(state) {
            return state.currentGallery;
        },
    },
    actions: {
        /* select Current Gallery */
        async selectedGallery(payload) {
            const index = this.galleryImages.findIndex((element) => element.id === payload);
            this.currentGallery = this.galleryImages[index];
        },
        /* create Gallery */
        async createGallery(payload) {
            try {
                payload.createdAt = dayjs();
                payload.updatedAt = "1000-01-01T00:00:00.000Z";

                await instance.post("gallery/createGallery", payload)
                .then((res) => {
                    console.log("new gallery:", res.data);

                    let gallery = {
                        id: res.data.id,
                        imgs01: JSON.parse(payload.imgs01),
                        imgs02: JSON.parse(payload.imgs02),
                        title: payload.title,
                        category: payload.category,
                        belong: payload.belong,
                        author: payload.author,
                        createdAt: res.data.created_time,
                        convertedAt: dayjs(payload.createdAt).format("YYYY년 MM월 DD일"),
                        updatedAt: payload.updatedAt,
                    }

                    this.galleryImages.unshift(gallery);
                    alert("갤러리 등록 성공!");
                })
            } catch (error) {
                alert("새 갤러리 등록이 실패하였습니다.ㅜㅜ");
                console.error("New Gallery's Create 에러:", error);
            }
        },
         /* read Gallery */
         async fetchGallery() {
            try {
                const data = await instance("gallery")

                let galleryArray = [];

                data.data.forEach((v) => {
                    let gallery = v;

                    gallery.Img01 = JSON.parse(gallery.Img01);
                    gallery.Img02 = JSON.parse(gallery.Img02);

                    galleryArray.push({
                        id: gallery.id,
                        imgs: [...gallery.Img01, ...gallery.Img02],
                        imgs01: gallery.Img01,
                        imgs02: gallery.Img02,
                        title: gallery.Title,
                        category: gallery.Category,
                        belong: gallery.Belong,
                        author: gallery.Author,
                        createdAt: gallery.CreatedAt,
                        convertedAt: dayjs(gallery.CreatedAt).format("YYYY년 MM월 DD일"),
                        updatedAt: gallery.UpdatedAt,
                        status: gallery.Status,
                    });
                });
                this.galleryImages = galleryArray;

            } catch (error) {
                console.error(error);
            }
        },
        /* update Gallery */
        async updateGallery(payload) {
            try {
                payload.updatedAt = dayjs();

                await instance.post("gallery/updateGallery", payload)
                .then((res) => {
                    console.log("Gallery:", res.data);

                    alert("갤러리 수정 성공!");
                })
            } catch (error) {
                alert("새 갤러리 수정이 실패하였습니다.ㅜㅜ");
                console.error("Gallery's Update 에러:", error);
            }
        },
    }
})