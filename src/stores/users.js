import { defineStore } from "pinia";

import axios from "axios";

import dayjs from "dayjs";
import 'dayjs/locale/ko'

dayjs.locale('ko')      // global로 한국어 locale 사용

export const useUserStore = defineStore("user", {
  state: () => ({
    open_modal: false,
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
    }
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

    /* setting Current User */
    async selectedUser(payload) {
      const index = this.users.findIndex((element) => element.id === payload);
      this.currentUser = this.users[index];
    },
    
    /* Create */
    async createUser(payload) {
      try {
        await axios.post('https://pure-api.herokuapp.com/createUser', {
        /* await axios
          .post("http://localhost:4000/createUser", { */
            email: payload.email,
            name: payload.name,
            phoneNumber: payload.phoneNumber,
            img: payload.img || "user.png",
            greetings: payload.greetings || "",
            extraInfo: payload.extraInfo || "",
            createdAt: dayjs(),
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
              createdAt: dayjs(payload.createdAt).format("YYYY년 MM월 DD일"),
              bookmark: payload.bookmark,
            };

            console.log("payload:", user);

            this.users.unshift(user);
            
            this.open_modal = false;
          });
      } catch (error) {
        alert('새 학생 등록이 실패하였습니다ㅜㅜ')
        console.error("New User's Create 에러:", error);
      }
    },
    /* Read */
    async fetchUsers() {
      try {
        const data = await axios.get('https://pure-api.herokuapp.com/users')
        /* const data = await axios.get("http://localhost:4000/users"); */

        let usersArray = [];

        data.data.forEach(v => {
          let user = v;

          usersArray.push({
            id: user.id,
            email: user.Email,
            name: user.Name,
            phoneNumber: user.PhoneNumber,
            img: user.Img || "user.png",
            greetings: user.Greetings || "",
            extraInfo: user.ExtraInfo || "",
            createdAt: dayjs(user.CreatedAt).format("YYYY년 MM월 DD일"),
            bookmark: user.Bookmark,
          });
        })
        this.users = usersArray;
        this.currentUser = usersArray[0];

      } catch (error) {
        console.error(error);
      }
    },
  },
});
