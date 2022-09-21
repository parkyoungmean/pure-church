import { defineStore } from "pinia";

import axios from "axios";

import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko"); // global로 한국어 locale 사용

export const useImageStore = defineStore("image", {
    state: () => ({
        isLoading: false,
        images: null,
        currentImage: [],
        currentMobileImage: [],
        currentImages01: [],
        currentImages02: [],
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
        /* Toggle Loader */
        toggleLoading(dir = null) {
            if (dir === true) {
              state.isLoading = true
            } else if (dir === false) {
              state.isLoading = false
            } else {
              this.isLoading = !this.isLoading;
            }
        },
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
                    console.log('이미지 업로드 data 결과:', data.data.data);
                    this.currentImage = data.data.data;
                })
            } catch (error) {
                alert("이미지 업로드가 실패하였습니다.ㅜㅜ");
                console.error("New Image Upload 에러:", error);  
            }
        },
        /* upload Mobile Image */
        async uploadMobileImage(image) {
            try {
                console.log('mobile_image:', image);

                const formData = new FormData();
                formData.append('image', image);

                await axios.post(`https://api.imgur.com/3/image`, formData, {
                    headers: {
                        Authorization: `Client-ID ${process.env.VUE_APP_IMGUR_ID}`,
                        Accept: "application/json",
                    }
                })
                .then((data) =>  {
                    console.log('모바일 이미지 업로드 data 결과:', data.data.data);
                    this.currentMobileImage = data.data.data;
                })
            } catch (error) {
                alert("모바일 이미지 업로드가 실패하였습니다.ㅜㅜ");
                console.error("New Mobile Image Upload 에러:", error);  
            }
        },
        /* upload Image */
        async uploadMultipleImages(image) {
            
            /* 로딩 start */
            this.toggleLoading();
            
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
                    console.log('이미지 업로드 data 결과:', data.data.data);
                    const { id, deletehash, link, size, type, width, height, datetime } = data.data.data;
                    
                    if (this.currentImages01.length < 11) {
                        this.currentImages01.push({ id, deletehash, link, size, type, width, height, datetime });
                    } else {
                        this.currentImages02.push({ id, deletehash, link, size, type, width, height, datetime });
                    }
                    
                    /* 로딩 end */
                    this.toggleLoading();
                })
            } catch (error) {
                /* 로딩 end */
                this.toggleLoading();
                
                alert("이미지 업로드가 실패하였습니다.ㅜㅜ");
                console.error("New Image Upload 에러:", error);  
            }
        },
    }
})