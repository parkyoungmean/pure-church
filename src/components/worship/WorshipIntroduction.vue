<template>
    <div class="space-y-15">
        <!-- Primary Worship -->
        <div class="primary md:flex justify-between items-center m-5">
            <div>
                <h1 class="hidden md:block text-[2.5rem] xl:text-[3rem]">Pure Worship</h1>
                <p class="text-[1.1rem] md:text-[1.1rem] xl:text-[1rem] 4xl:text-[1.5rem] text-[#3FC1C9]">순전한 예배에 오신 분들과 영상 앞에 모인 분들을 환영합니다.</p>
                <span class="text-[.8rem] 4xl:text-[1rem] text-gray-500 ml-1">예배를 드리는 모든 곳에 주의 임재가 가득하시길 축복합니다.</span> 
                <h1 class="mt-5 p-1 text-[1rem] md:text-[1.5rem] text-[#FF2E63]">주일 예배(1부, 2부)</h1>
                <p class="text-[.7rem] md:text-[.9rem] text-gray-500">1부 예배 | 시간: 주일 오전 09:30 | 장소: 강남 순전한교회</p>
                <p class="text-[.7rem] md:text-[.9rem] text-gray-500">2부 예배 | 시간: 주일 정오 12:00 | 장소: 도봉 순전한 교회 본당</p>
                <button class="mt-4 text-xs md:text-sm"><a href=""> 더 보기<i class="fas fa-arrow-right ml-1.5 "></i></a></button>
            </div>
            <div class="image m-auto md:m-0 p-[.7em] md:p-[1em] w-[340px] h-[210px] md:w-[500px] md:h-[270px] xl:w-[500px] xl:h-[270px] 2xl:w-[500px] 2xl:h-[270px] 3xl:w-[500px] 3xl:h-[270px] 4xl:w-[550px] 4xl:h-[300px] 5xl:w-[600px] 5xl:h-[330px] 6xl:w-[650px] 6xl:h-[350px] 7xl:w-[700px] 7xl:h-[400px] 8xl:w-[750px] 8xl:h-[450px]  border-b-6 border-carnation-pink-400 border-r-6 border-[#F38181]">
                <img @click="isPlay()" v-show="!play" class="imageStyle" :src="`https://img.youtube.com/vi/${primaryWorship.videoId}/maxresdefault.jpg`" style="width:100%; height:100%;">

                <!-- 주일 예배 영상 -->
                <iframe v-show="play" class="latestVideoEmbed" vnum='0' pid="PL13DkA-MmUMtDgdl9Gz_lU5iJ5lWPBEM-" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
        <!-- End Of Primary Worship -->

        <p class="md:block hidden">md입니다</p>
       <p class="xl:block hidden">xl입니다</p>
       <p class="2xl:block hidden">2xl입니다</p>
       <p class="3xl:block hidden">3xl입니다</p>
       <p class="4xl:block hidden">4xl입니다</p>
       <p class="5xl:block hidden">5xl입니다</p>
       <p class="6xl:block hidden">6xl입니다</p>
       <p class="7xl:block hidden">7xl입니다</p>
       <p class="8xl:block hidden">8xl입니다</p>


       <!-- Secondary Worships -->
        <section class="secondary mx-auto w-full justify-center items-center md:mt-32">
            <h1 class="text-[2rem] md:text-[2.5rem] xl:text-[3rem] text-center">Pure Worships</h1>
            <p class="text-[.8rem] text-center">주일 예배 / 주중 예배 / 주보 안내</p>
            <div class="worships m-[1em] md:m-[2em] p-[1em] md:flex space-y-5 justify-between items-center gap-[2em] border-l-4 border-[#94B3FD] border-r-4 border-[#94B3FD]">
                <div class="friend md:mt-5 mx-auto w-[300px] md:w-[340px] p-[1em] bg-[#FCE38A]">
                    <h1 class="m-[2rem] p-1 text-[#FF2E63] text-[1.2rem] md:text-[.6rem] 2xl:text-[.7rem] 3xl:text-[1.3rem] font-semibold">프렌드 어린이 예배</h1>
                    <p class="text-[.8rem] text-gray-500">시간: 주일 오전 9:50</p>
                    <p class="text-[.8rem] text-gray-500">장소: 도봉 순전한 교회 본당</p>
                    <a href="" class="items-center text-[.7rem] underline">자세히 보기<i class="fas fa-arrow-right ml-1.5"></i></a>
                </div>
                <div class="teenager m-auto w-[300px] md:w-[340px] p-[1em] bg-[#EAFFD0]">
                    <h1 class="m-[2rem] p-1 text-[#FF2E63] text-[1.2rem] md:text-[.6rem] 2xl:text-[.7rem] 3xl:text-[1.3rem] font-semibold">청소년부 예배</h1>
                    <p class="text-[.8rem] text-gray-500">시간: 주일 오전 10:00</p>
                    <p class="text-[.8rem] text-gray-500">장소: 도봉 순전한 교회 본당</p>
                    <a href="" class="items-center text-[.7rem] underline">자세히 보기<i class="fas fa-arrow-right ml-1.5"></i></a>
                </div>
                <div class="thursday m-auto w-[300px] md:w-[340px] p-[1em] bg-[#95E1D3]">
                    <h1 class="m-[2rem] p-1 text-[#FF2E63] text-[1.2rem] md:text-[.6rem] 2xl:text-[.7rem] 3xl:text-[1.3rem] font-semibold">목요 예배</h1>
                    <p class="text-[.8rem] text-gray-500">시간: 목요일 저녁 8:00</p>
                    <p class="text-[.8rem] text-gray-500">장소: 도봉 순전한 교회 본당</p>
                    <a href="" class="items-center text-[.7rem] underline">자세히 보기<i class="fas fa-arrow-right ml-1.5"></i></a>
                </div>
                <!-- Bulletin Image -->
                <div class="Bulletin m-auto w-[300px] md:w-[340px] p-[1em] bg-[#95E1D3] bg-cover bg-no-repeat" :style="`background-image: url('https://imgur.com/yCl9ldL.jpg')`">
                    <!-- <div class="relative h-96 xl:h-[500px] 2xl:h-[600px] w-72 md:w-full rounded-2.5xl p-10 bg-center bg-cover bg-no-repeat" :style="`background-image: url('https://imgur.com/WYzIXZb.jpg')`">
                        <span class="absolute px-1.5 py-0.5 md:px-2 md:py-2 left-5 top-5 rounded-lg bg-gray-900/80 text-lg text-white font-bold">2022.09.25</span>
                    </div> -->
                    <span class="px-1.5 py-0.5 left-2.5 top-1 rounded-lg bg-gray-900/80 text-[.9rem] text-white font-bold">2022.09.25</span>
                    <h1 class="mt-[0.5rem] mb-[2.5rem] py-0.5 text-[#FF2E63] text-center w-1/3 md:w-1/2 rounded-lg bg-[#F8F3D4] text-[1.2rem] md:text-[.6rem] 2xl:text-[.7rem] 3xl:text-[1.3rem] font-semibold">오늘의 주보</h1>
                    <p class="text-[.8rem] text-transparent">_</p>
                    <p class="text-[.8rem] text-transparent">_</p>
                    <a href="" class="items-center text-[.7rem] underline">자세히 보기<i class="fas fa-arrow-right"></i></a>
                </div>
                <!-- End Of Bulletin Image -->
            </div>
            <!-- 아침 예배 -->
            <p class="text-[.9rem] xl:text-2xl font-bold ml-2 md:ml-8 py-5 underline"> ※ 아침 예배 : 월~금 AM 6:40 (ZOOM 으로 진행합니다.) </p>
        </section>
        <!-- End Of Secondary Worships -->
    </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useRouter } from "vue-router";
import axios from "axios";
import { useWorshipStore } from "../../stores/worships";


const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
});

export default {
    setup () {
        
        const router = useRouter();

        /* Pinia */
        const store = useWorshipStore();

        const play = ref(false);
        const worships = ref([]);
        const latestWorship = ref(null);
       
        const primaryWorship = computed(() => {
            return store.primaryWorship;
        });
        onMounted(() => {
            var iframes = document.getElementsByClassName('latestVideoEmbed');
            
            for (var i = 0, len = iframes.length; i < len; i++) {
                loadVideo(iframes[i]);
            }
        })

        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        
        const loadVideo = async (iframe) => {
            
            
            
            /* 주일 예배 플레이리스트 id */
            const pid = 'PL13DkA-MmUMtDgdl9Gz_lU5iJ5lWPBEM-';
            
            const playlistURL = encodeURIComponent(`https://www.youtube.com/feeds/videos.xml?playlist_id=${pid}`)
            const reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${playlistURL}`;

            await fetch(reqURL, requestOptions)
                .then(response => response.json())
                .then(result => {
                    const videoNumber = (iframe.getAttribute('vnum') ? Number(iframe.getAttribute('vnum')) : 0);
                    console.log(videoNumber);
                    
                    const link = result.items[videoNumber].link;
                    const id = link.substr(link.indexOf("=") + 1);

                    
                    iframe.setAttribute("src", `https://youtube.com/embed/${id}?controls=0&autoplay=1`);

                    let worshipArray = [];

                    result.items.forEach((v) => {
                        let worship = v;

                        worshipArray.push({
                            id: worship.guid,
                            link: worship.link,
                            videoId: worship.link.substr(worship.link.indexOf("=") + 1),
                            title: worship.title,
                            belong: worship.belong || '주일예배',
                            author: worship.author || '관리자',
                            width: '640',
                            height: '480',
                            createdAt: worship.pubDate,
                            /* convertedAt: dayjs(worship.pubDate).format("YYYY년 MM월 DD일"), */
                            /* updatedAt: worship.UpdatedAt, */
                            status: worship.Status,
                        });
                    });
                    worships.value = worshipArray;
                    store.primaryWorship = worships.value[0];

                    console.log('주일 예배 동영상은?', store.primaryWorship);
                    console.log(worships.value);
                })
                .catch(error => console.log('error', error));
        }

        const isPlay = () => {
            play.value = !play.value;
        }

        return {
            play,
            latestWorship,
            primaryWorship,
            worships,
            isPlay,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>