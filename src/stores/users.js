import { defineStore } from "pinia";

import axios from "axios";

import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko"); // global로 한국어 locale 사용

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

export const useUserStore = defineStore("user", {
  state: () => ({
    open_modal: false,
    hide_nav: false,
    show_sidebar: true,
    user_mode: "read",
    users: [],
    currentUser: [],
  }),
  getters: {
    getUsers(state) {
      return state.users;
    },
    getCurrentUser(state) {
      console.log(state.currentUser);
      return state.currentUser;
    },
  },
  actions: {
    toggleModal(dir = null) {
      if (dir === "open") {
        this.open_modal = true;
      } else if (dir === "close") {
        this.open_modal = false;
      } else {
        this.open_modal = !this.open_modal;
      }
    },

    userMode(dir = null) {
      if (dir === "create") {
        this.user_mode = "create";
      } else if (dir === "read") {
        this.user_mode = "read";
      } else {
        this.user_mode = "update";
      }
    },

    /* setting Current User */
    async selectedUser(payload) {
      const index = this.users.findIndex((element) => element.id === payload);
      this.currentUser = this.users[index];
    },

    /* Create */
    async createUser(payload) {
      try {
        await instance.post("createUser", {
            email: payload.email,
            name: payload.name,
            phoneNumber: payload.phoneNumber,
            img: payload.img || "user.png",
            greetings: payload.greetings || "",
            extraInfo: payload.extraInfo || "",
            createdAt: dayjs(),
            updatedAt: "1000-01-01T00:00:00.000",
            bookmark: "",
          })
          .then((res) => {
            console.log("New User:", res.data);
            
            let user = {
              id: res.data.id,
              email: payload.email,
              name: payload.name,
              img: payload.img || "user.png",
              phoneNumber: payload.phoneNumber,
              extraInfo: payload.extraInfo || "",
              greetings: payload.greetings || "",
              createdAt: res.data.created_time,
              convertedAt: dayjs(payload.createdAt).format("YYYY년 MM월 DD일"),
              bookmark: res.data.properties.Bookmark.rich_text[0].text.content,
            };

            console.log("payload:", user);

            this.users.unshift(user);
            this.currentUser = user;

            alert("새 학생 등록 성공!");
          });
      } catch (error) {
        alert("새 학생 등록이 실패하였습니다ㅜㅜ");
        console.error("New User's Create 에러:", error);
      }
    },
    /* Read */
    async fetchUsers() {
      try {
        const data = await instance("users");

        let usersArray = [];

        data.data.forEach((v) => {
          let user = v;

          usersArray.push({
            id: user.id,
            email: user.Email,
            name: user.Name,
            phoneNumber: user.PhoneNumber,
            img: user.Img || "user.png",
            greetings: user.Greetings || "",
            extraInfo: user.ExtraInfo || "",
            createdAt: user.CreatedAt,
            convertedAt: dayjs(user.CreatedAt).format("YYYY년 MM월 DD일"),
            updatedAt: user.UpdatedAt,
            bookmark: user.Bookmark,
          });
        });
        this.users = usersArray;
        this.currentUser = usersArray[0];
      } catch (error) {
        console.error(error);
      }
    },
    /* Update */
    async updateUser(payload) {
      try {
        await instance.post("updateUser", {
            id: payload.id,
            email: payload.email,
            name: payload.name,
            phoneNumber: payload.phoneNumber,
            img: payload.img || "user.png",
            greetings: payload.greetings || "",
            extraInfo: payload.extraInfo || "",
            createdAt: payload.createdAt,
            updatedAt: dayjs(),
            bookmark: payload.bookmark,
          })
          .then((res) => {
            console.log("data:", res.data);
            let user = {
              id: payload.id,
              email: payload.email,
              name: payload.name,
              img: payload.img || "user.png",
              phoneNumber: payload.phoneNumber,
              extraInfo: payload.extraInfo || "",
              greetings: payload.greetings || "",
              createdAt: payload.createdAt,
              updatedAt: res.data.last_edited_time,
              bookmark: payload.bookmark,
            };
            console.log("payload:", user);
            console.log("학생의 정보가 수정되었습니다.");
            const index = this.users.findIndex(
              (element) => element.id === payload.id
            );
            this.users[index] = user;
            this.currentUser = user;

            alert("학생 정보 수정 성공!");
          });
      } catch (error) {
        alert("학생 정보의 수정이 실패하였습니다ㅜㅜ");
        console.error("User's Update 에러:", error);
      }
    },
    /* Delete */
    async deleteUser(payload) {
      try {
        await instance.post("deleteUser", {
            id: payload.id,
          })
          .then((res) => {
            console.log("data:", res.data);
            
            const index = this.users.findIndex(
              (element) => element.id === payload.id
            );
            console.log('인덱스?', index);
            this.users.splice(index, 1);
            console.log(this.users[index]);
            this.currentsUser = this.users[index];
            
            console.log("학생의 정보가 삭제되었습니다.");

          });
      } catch (error) {
        alert("학생 정보의 삭제가 실패하였습니다ㅜㅜ");
        console.error("User's Delete 에러:", error);
      }
    },
  },
});
