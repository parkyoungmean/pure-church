import { defineStore } from "pinia";

import axios from "axios";

import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko"); // global로 한국어 locale 사용

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
});

export const useAuthStore = defineStore("authentication", {
    state: () => ({
        isLoading: false,
        loadingContent: '',
        me: null,
        signupSuccess: false,
        loginSuccess: false,
    }),
    actions: {
         /* Toggle Loader */
         toggleLoading(dir = null, content) {
            if (dir === true) {
              this.isLoading = true
              this.loadingContent = content;
            } else if (dir === false) {
              this.isLoading = false
            } else {
              this.isLoading = !this.isLoading;
              if (this.isLoading) {
                  this.loadingContent = content;
              }
            }
        },
        /* Login */
        async login(payload) {
            
            /* 로딩 start */
            this.toggleLoading(true, '로그인 중입니다.');

            try {
                await instance.post("auth/login", {
                    email: payload.email,
                    password: payload.password,
                    autoLogin: payload.autoLogin,
                })
                .then((res) => {
                    this.loginSuccess = res.data.loginSuccess;

                    if (this.loginSuccess) {
                        this.me = res.data.data;
                        localStorage.setItem("token", JSON.stringify(res.data.token));
                    
                    } else {
                        alert(res.data.message);
                    }

                    /* 로딩 end */
                    this.toggleLoading(false);
                    
                });
            } catch (error) {
                /* 로딩 end */
                this.toggleLoading(false);

                alert("로그인이 실패하였습니다ㅜㅜ");
                console.error("Login 에러:", error);
            }
        },
        /* Signup */
        async signup(payload) {
            /* 로딩 start */
            this.toggleLoading(true, '회원가입 중입니다.');

            try {
                await instance.post("auth/signup", {
                    email: payload.email,
                    password: payload.password,
                    name: payload.name,
                    phoneNumber: "",
                    avatar: "user.png",
                    role: "준회원",
                    bookmark: "",
                    createdAt: dayjs().add(9, "hour"),
                    updatedAt: "1000-01-01T00:00:00.000",
                  })
                  .then((res) => {
                    
                    /* 로딩 end */
                    this.toggleLoading(false);

                    console.log("New Member:", res.data);
                    this.signupSuccess = res.data.signupSuccess;
                    alert(res.data.message);
                  });
              } catch (error) {
                /* 로딩 end */
                this.toggleLoading(false);

                alert("회원가입이 실패하였습니다ㅜㅜ");
                console.error("Signup 에러:", error);
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

            /* 로딩 start */
            this.toggleLoading(true, '인증 중입니다.');

            try {
            const res = await instance.post("auth/account", {token: JSON.parse(localStorage.getItem("token"))});
    
            console.log('res.data', res.data);
            this.me = res.data;

            /* 로딩 end */
            this.toggleLoading(false);

            } catch (error) {

                /* 로딩 end */
                this.toggleLoading(false);
                
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