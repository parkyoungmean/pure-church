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
        me: null,
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
                    console.log("token:", res.data.token);
                    console.log("eamil:", res.data.email);
                    console.log("name:", res.data.name);

                    this.me = res.data;
                    localStorage.setItem("token", JSON.stringify(res.data.token));
                    
                    alert("로그인 성공!");
                });
            } catch (error) {
                alert("로그인이 실패하였습니다ㅜㅜ");
                console.error("Login 에러:", error);
            }
        },
        /* Logout */
        async logout() {
            try {
                localStorage.removeItem("token");
                this.me = null;
                alert("로그아웃하셨습니다.");
            } catch (error) {
                console.error("Logout 에러:", error);
            }
        },
        /* Account */
        async account() {
            try {
            const res = await instance.post("auth/account", {token: JSON.parse(localStorage.getItem("token"))});
    
            console.log('res.data', res.data);
            this.me = res.data;

            } catch (error) {
                if (error.response.data.code === 419) {
                    console.error('61번줄 error:', error.response.data);
                    alert(error.response.data.message);
                } else {
                    console.error(error);
                    console.error(error.response.data);
                }
            }
        },
    }
})