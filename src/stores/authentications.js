import { defineStore } from "pinia";

import axios from "axios";

import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko"); // global로 한국어 locale 사용

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
});

export const useAuthStore = defineStore("bulletin", {
    state: () => ({
        account: null,
    }),
    actions: {
        /* Login */
        async login(payload) {
            try {
                await instance.post("auth/login", {
                    email: payload.email,
                    password: payload.password,
                })
                .then((res) => {
                    console.log("login:", res.data);
                    this.account = res.data;
                    
                    alert("로그인 성공!");
                });
            } catch (error) {
                alert("로그인이 실패하였습니다ㅜㅜ");
                console.error("Login 에러:", error);
            }
        },
    }
})