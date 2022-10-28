import { defineStore } from "pinia";

import axios from "axios";

import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko"); // global로 한국어 locale 사용

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
});

export const useWorshipStore = defineStore("worship", {
    state: () => ({
        isLoading: false,
        loadingContent: '',
        open_modal: false,
        worships: [],
        primaryWorship: [],                 // 최신 주일 예배 동영상
        currentWorship: null,               // 선택된 현재 예배 동영상
        latestWorships: null,               // 최근 예배 동영상 10개
        processedWorship: [],               // desc에서 추출된 예배 데이터
        /* infinite Loading */
        hasMore: null,
        startCursor: null,
    }),
    getters: {
        getWorships(state) {
            return state.worships;
        },
        getCurrentWorship(state) {
            return state.currentWorship;
        },
    },
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

        /* Toggle Youtube Player Modal */
        toggleModal(dir = null) {
            if (dir === "open") {
                this.open_modal = true;
            } else if (dir === "close") {
                this.open_modal = false;
            } else {
                this.open_modal = !this.open_modal;
            }
        },

        /* get Youtube Video Description by VideoId */
        async getWorshipDesc(payload) {

            try {
                await instance.post("worship/getWorshipDesc", payload)
                .then((res) => {
                    this.processedWorship = res.data;
                    console.log("worship description:", res.data);
                })
            } catch (error) {
                
            }
            
        },

        /* select Current Worship */
        async selectedWorship(payload) {
            const index = this.worships.findIndex((element) => element.id === payload);
            this.currentWorship = this.worships[index];
        },

        /* create Worship */
        async createWorship(payload) {
            try {
                payload.createdAt = dayjs().add(9, "hour");
                payload.updatedAt = "1000-01-01T00:00:00.000";

                await instance.post("worship/createWorship", payload)
                .then((res) => {
                    console.log("new worship:", res.data);

                    let worship = {
                        id: res.data.id,
                        originTitle: payload.originTitle,
                        title: payload.title,
                        verse: payload.verse,
                        speaker: payload.speaker,
                        ytUrl: payload.ytUrl,
                        videoId: payload.videoId,
                        belong: payload.belong,
                        author: payload.author,
                        color: payload.color,
                        pbDate: payload.pbDate,
                        createdAt: res.data.created_time,
                        convertedAt: dayjs(payload.createdAt).format("YYYY년 MM월 DD일"),
                        updatedAt: payload.updatedAt,
                    }

                    this.worships.unshift(worship);
                    alert("예배 데이터 등록 성공!");
                })
            } catch (error) {
                alert("새 예배 데이터 등록이 실패하였습니다.ㅜㅜ");
                console.error("New Worship's Create 에러:", error);
            }
        },
        
        async createLatestWorships(payload) {
            
            /* 로딩 start */
            this.toggleLoading(true, '새로고침 중입니다..');

            try {
                await instance.post("worship/createLatestWorships", payload)
                .then((res) => {
                    console.log("latest worships:", res.data);

                    /* 로딩 end */
                    this.toggleLoading(false);

                    alert("신규 예배 데이터 등록 성공!");
                })
            } catch (error) {
                /* 로딩 end */
                this.toggleLoading(false);

                alert("신규 예배 데이터 등록이 실패하였습니다.ㅜㅜ");
                console.error("Latest Worship's Create 에러:", error);
            }
        },

        /* read Worship */
        async fetchWorship() {

            /* 로딩 start */
            this.toggleLoading(true, '로딩중입니다.');

            try {
                const data = await instance("worship")

                let worshipArray = [];

                data.data.forEach((v) => {
                    let worship = v;

                    worshipArray.push({
                        id: worship.id,
                        title: worship.Title.includes('제목:') ? worship.Title.replace('제목:', '') : worship.Title,
                        originTitle: worship.OriginTitle,
                        ytUrl: worship.YtUrl,
                        videoId: worship.VideoId,
                        speaker: worship.Speaker,
                        desc: worship.Desc,
                        verse: worship.Verse,
                        belong: worship.Belong,
                        author: worship.Author,
                        color: worship.Color,
                        pbDate: worship.PbDate,
                        convertedAt: dayjs(worship.PbDate).format("YYYY년 MM월 DD일"),
                        createdAt: worship.CreatedAt,
                        updatedAt: worship.UpdatedAt,
                        status: worship.Status,
                    });
                });

                this.worships = worshipArray;
                console.log('예배데이터',this.worships);

                /* 로딩 end */
                this.toggleLoading(false);
                
            } catch (error) {

                /* 로딩 end */
                this.toggleLoading(false);

                console.error(error);
            }
        },

        /* read Worship for infinite loading */
        async fetchWorship_ins() {

            /* 로딩 start */
            this.toggleLoading(true, '로딩중입니다.');

            try {
                const { data } = await instance("worship/getWorships-ins")
                
                console.log('hasMore', data[1]);
                console.log('worships', data[2]);
                console.log('next_cursor', data[0]);

                
                let worshipArray = [];

                data[2].forEach((v) => {
                    let worship = v;

                    worshipArray.push({
                        id: worship.id,
                        title: worship.Title.includes('제목:') ? worship.Title.replace('제목:', '') : worship.Title,
                        originTitle: worship.OriginTitle,
                        ytUrl: worship.YtUrl,
                        videoId: worship.VideoId,
                        speaker: worship.Speaker,
                        desc: worship.Desc,
                        verse: worship.Verse,
                        belong: worship.Belong,
                        author: worship.Author,
                        color: worship.Color,
                        pbDate: worship.PbDate,
                        convertedAt: dayjs(worship.PbDate).format("YYYY년 MM월 DD일"),
                        createdAt: worship.CreatedAt,
                        updatedAt: worship.UpdatedAt,
                        status: worship.Status,
                    });
                });

                this.startCursor = data[0];
                this.hasMore = data[1];

                
                this.worships.push(...worshipArray);
                console.log('예배데이터',this.worships);

                /* 로딩 end */
                this.toggleLoading(false);
                
            } catch (error) {

                /* 로딩 end */
                this.toggleLoading(false);

                console.error(error);
            }
        },

        /* read Worship for infinite loading */
        async infiniteHandler(payload) {

            /* 로딩 start */
            /* this.toggleLoading(true, '로딩중입니다.'); */
            
            try {
                const { data } = await instance.post("worship/getWorships-ins", {startCursor: payload})
                
                console.log('hasMore', data[1]);
                console.log('worships', data[2]);
                console.log('next_cursor', data[0]);

                let worshipArray = [];

                data[2].forEach((v) => {
                    let worship = v;

                    worshipArray.push({
                        id: worship.id,
                        title: worship.Title.includes('제목:') ? worship.Title.replace('제목:', '') : worship.Title,
                        originTitle: worship.OriginTitle,
                        ytUrl: worship.YtUrl,
                        videoId: worship.VideoId,
                        speaker: worship.Speaker,
                        desc: worship.Desc,
                        verse: worship.Verse,
                        belong: worship.Belong,
                        author: worship.Author,
                        color: worship.Color,
                        pbDate: worship.PbDate,
                        convertedAt: dayjs(worship.PbDate).format("YYYY년 MM월 DD일"),
                        createdAt: worship.CreatedAt,
                        updatedAt: worship.UpdatedAt,
                        status: worship.Status,
                    });
                });

                this.startCursor = data[0];
                this.hasMore = data[1];
                this.worships.push(...worshipArray);

                console.log('hasMore',this.hasMore);
                console.log('next_cursor',this.startCursor);
                console.log('예배데이터',this.worships);

                /* 로딩 end */
                /* this.toggleLoading(false); */
                
            } catch (error) {

                /* 로딩 end */
                /* this.toggleLoading(false); */

                console.error(error);
            }
        },

        /* update Worship */
        async updateWorship(payload) {
            try {
                payload.updatedAt = dayjs();

                await instance.post("worship/updateWorship", payload)
                .then((res) => {
                    console.log("Worship:", res.data);

                    alert("예배 데이터 수정 성공!");
                })
            } catch (error) {
                alert("새 예배 데이터 수정이 실패하였습니다.ㅜㅜ");
                console.error("Worship's Update 에러:", error);
            }
        },
        /* Delete Worship */
        async deleteWorship(payload) {
            try {
                await instance
                    .post("worship/deleteWorship", {
                        id: payload,
                    })
                    .then((res) => {
                    console.log("data:", res.data);
                    
                    console.log("예배 데이터가 삭제되었습니다.");
                    alert("예배 데이터 삭제 성공!");
                    });
            } catch (error) {
                alert("예배 데이터 삭제가 실패하였습니다ㅜㅜ");
                console.error("Worship's Delete 에러:", error);
            }
        },
    }
})