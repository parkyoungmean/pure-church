<template>
    <div class="min-h-screen items-center justify-center">
        <div class="mx-auto w-full xl:max-w-7xl 2xl:max-w-[1640px] px-3 sm:px-6 md:px-8 md:px-12">
            <!-- Close Button -->
            <div class="flex justify-end p-3 md:p-6">
                <button
                @click="$router.go(-1)"
                class="
                    text-blue-400
                    top-5
                    right-0
                    h-7
                    w-7
                    text-2xl
                    font-semibold
                    justify-center
                    items-center
                    focus:outline-none
                "
                >
                <i class="fas fa-arrow-left"></i>
                </button>
            </div>
            <section class="header md:py-5">
                <div class="mx-auto sm:px-8 md:px-12 sm:w-full md:max-w-5xl xl:max-w-6xl 2xl:min-w-[1100px] 3xl:max-w-[1250px] 4xl:max-w-[1200px] 5xl:max-w-[1300px] 6xl:max-w-[1500px] 7xl:max-w-[1500px] 8xl:max-w-[1600px]">
                    <h2 class="text-2xl font-semibold md:text-3xl text-center">전체 예배</h2>
                    <!-- Add Worship Button -->
                    <div class="right flex justify-end items-center text-xs md:text-lg my-3 md:my-5">
                        <div
                        @click="worshipFormOpen()"
                        class="
                            button
                            flex
                            text-xs
                            md:text-lg
                            p-1
                            md:p-1
                            5
                            rounded-3xl
                            bg-purple-500
                            space-x-1
                            mr-2
                            md:mr-5
                            cursor-pointer
                            items-center
                        "
                        >
                            <div class="inner-button flex">
                                <i class="fas fa-plus text-purple-700 p-1 md:p-1.5 rounded-full bg-white"></i>
                            </div>
                            <div class="text-white">추가하기</div>
                        </div>
                        <button @click="createLatestWorships()" class="flex items-center justify-center text-lg">
                            <span class="material-icons-outlined text-2xl">
                                refresh
                            </span>
                            <div>업데이트하기</div>
                        </button>
                        
                    </div>
                    <!-- End Of Worship Button -->
                </div>
            </section>
            <WorshipGrid :worships="worships" />
        </div>
    </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useRouter } from "vue-router";
import { useWorshipStore } from "../../stores/worships";
import WorshipGrid from './WorshipGrid.vue';

import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko"); // global로 한국어 locale 사용

export default {
    components: {
        WorshipGrid,
    },
    setup () {
        /* Router */
        const router = useRouter();

        /* Pinia */
        const store = useWorshipStore();

        const worships = computed(() => {
            return store.worships;
        })

        onMounted(() => {
            store.fetchWorship();
        })

        /* Create Worship Infomation */
        const worshipFormOpen = () => {
            router.push("/worshipregistration");
        };
        
        const createLatestWorships = () => {
            loadVideo();
        };
        
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        const loadVideo = async () => {
            /* 최근 예배 플레이리스트 id */
            const pid = 'UU9LuMbo8JtxglIrjRI_wU4A';

            const playlistURL = encodeURIComponent(`https://www.youtube.com/feeds/videos.xml?playlist_id=${pid}`)
            const reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${playlistURL}`;

            let latestWorshipArray =[];


            if(worships.value.length === 0) {
                alert("신규 예배동영상을 업데이트하기 위해 먼저 기존의 예배 동영상이 있어야 합니다. 이에 대하여 관리자에게 문의하세요.");
            } else {
                        
                await fetch(reqURL, requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(result.items);
                    /* console.log(worships.value[0]); */

                    let i = 1;
                    /* 노션의 예배데이터 배열과 비교 */
                    result.items.some((l) => {
                        let worship = l;
                        
                        /* 최신의 예배 영상의 videoId를 추출 */
                        let videoId = getYoutubeVideoIdFromUrl(worship.link);
                        
                        /* 최신 : notion */
                        if(videoId === worships.value[0]['videoId']) {
                            if(i===1) {
                                console.log(`현재 ${i}번째 예배동영상과 일치합니다. 그러므로 최신으로 업데이트된 상태입니다.`);
                                return true;
                            } else {
                                console.log(` 일치합니다. 현재 ${i}번째 예배동영상까지 업로드해야 합니다.`);
                                return true;
                            }

                        } else {
                            console.log(`일치하지 않습니다. 이 ${i-1}번째 동영상을 업데이트해야 합니다.`);

                            latestWorshipArray.push({
                                originTitle: worship.title,
                                ytUrl: `https://youtu.be/${videoId}`,
                                videoId: videoId,
                                author: '관리자',
                                pbDate: worship.pubDate,
                                
                            })

                            i++;
                        }
                    })
                    /* 최신으로 업데이트 된 상태(i===1)이면 업데이트 하지 않고 알림창만 화면에 표시합니다. */
                    if(i===1) {
                        alert('최신으로 업데이트 된 상태입니다.');
                    } else {
                        store.createLatestWorships(latestWorshipArray).then(() => {
                            store.fetchWorship();
                        })
                    }

                })
                
            };
        }
        
        const getYoutubeVideoIdFromUrl = (url) => {
            // Our regex pattern to look for a youTube ID
            const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
            //Match the url with the regex
            const match = url.match(regExp);
            //Return the result
            return match && match[2].length === 11 ? match[2] : undefined;
        };

        return {
            worships,
            worshipFormOpen,
            createLatestWorships,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>