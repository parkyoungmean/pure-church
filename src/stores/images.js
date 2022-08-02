import { defineStore } from "pinia";

import axios from "axios";

import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko"); // global로 한국어 locale 사용

export const useImageStore = defineStore("image", {
    state: () => ({
        images: null,
        currentImage: [],

    }),
    getters: {
        getImages(state) {
            return state.images;
        },
        getCurrentImage(state) {
            return state.currentImage;
        },
    },
    actions: {
        /* upload Image */
        async uploadImage(image) {
            try {
                console.log('image:', image);

                const formData = new FormData();
                formData.append('image', image);

                await axios.post(`https://api.imgur.com/3/image`, formData, {
                    headers: {
                        Authorization: `Client-ID ${process.env.VUE_APP_IMGUR_ID}`,
                        Accept: "application/json",
                    }
                })
                .then((data) =>  {
                    console.log('이미지 업로드 data 결과:', data.data);
                    this.currentImage = data.data;
                })

            } catch (error) {
                alert("이미지 업로드가 실패하였습니다.ㅜㅜ");
                console.error("New Image Upload 에러:", error);  
            }
        }
    }
})