import { defineStore } from "pinia";

import axios from "axios";

export const useUserStore = defineStore("user", {
  state: () => ({
    open_modal: false,
    users: [],
  }),
  getters: {
    getUsers(state) {
      return state.users;
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
    /* Create */
    async createUser(payload) {
      try {
        await axios.post('https://pure-api.herokuapp.com/createUser', {
            email: payload.email,
            name: payload.name,
            phoneNumber: payload.phoneNumber,
            img: payload.img || "user.png",
            greetings: payload.greetings || "",
            extraInfo: payload.extraInfo || "",
            createdAt: new Date(),
            bookmark: "",
          })
          .then((res) => {
            console.log("New User:", res.data);
            let user = {
              id: res.data.id,
              Email: payload.email,
              Name: payload.name,
              Img: payload.img || "user.png",
              PhoneNumber: payload.phoneNumber,
              ExtraInfo: payload.extraInfo || "",
              Greetings: payload.greetings || "",
              CreatedAt: new Date(),
              Bookmark: payload.bookmark,
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
        this.users = data.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
