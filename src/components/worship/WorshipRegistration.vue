<template>
    <div class="min-h-screen items-center justify-center">
        <section class="header text-center">
            <div class="mx-auto w-full xl:max-w-7xl 2xl:max-w-[1640px] px-3 sm:px-8 md:px-12">
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
                <!-- End of Close Button -->
                <!-- FORM -->
                <div class="flex flex-col items-center justify-center">
                    <h2 class="text-2xl font-semibold md:text-3xl p-2 md:p-5">예배 등록하기</h2>
                    <div class="bg-gray-200/60 md:w-2/5 p-6 rounded-lg shadow-md">
                        <form action="" @submit.prevent="onSubmit">
                            <!-- Belong Selecter -->
                            <div class="my-3 flex items-center space-x-1">
                                <label for="belong" class="block text-sm md:text-lg font-medium text-gray-700">소속:</label>
                                <div class="">
                                    <select v-model="belong" name="belong" id="belong" class="appearance-none w-full border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:border-epic-blue focus:ring-1 focus:ring-epic-blue">
                                        <option value="">선택하세요.</option>
                                        <option value="전체">전체</option>
                                        <option value="주일예배">주일예배</option>
                                        <option value="목요예배">목요예배</option>
                                        <option value="어린이예배">프렌드 어린이 예배</option>
                                        <option value="청소년예배">청소년부 예배</option>
                                        <option value="특별행사">특별행사</option>
                                    </select>
                                </div>
                            </div>
                           <!-- YOUTUBE URL Input -->
                           <div class="my-3 mx-auto flex justify-center">
                                <input :value="ytUrl" @input="ytUrl = $event.target.value" type="text" class="px-5 py-2 rounded-l-full bg-blue-100 placeholder-blue-400 w-full outline-none border-none rounded-xl focus:border-epic-blue focus:ring-1 focus:ring-epic-blue" placeholder="예배 동영상(유튜브)의 주소를 입력하세요.">
                                <button
                                    @click="extractVideoID(ytUrl)"
                                    class="px-5 rounded-r-full bg-blue-500 text-white"
                                    type="button"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 4v16m8-8H4"
                                    />
                                    </svg>
                                </button>
                            </div>
                            <!-- End Of YOUTUBE URL Input -->
                            <!-- Youtube -->
                            <div>
                                <!-- 예배 썸네일 이미지 -->
                                <img @click="isPlay()" v-show="!play" class="imageStyle" :src="`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`" style="width:100%; height:100%;">

                                <!-- 예배 영상 -->
                                <iframe v-show="play" class="selectedVideoEmbed" :src="`https://youtube.com/embed/${videoId}?controls=1&autoplay=0`" vnum='0' width="100%" height="100%" frameborder="0" allowfullscreen autoplay></iframe>
                            </div>
                            <!-- End Of Youtube -->
                            
                            <!-- YOUTUBE Origin Title Input -->
                            <div class="my-3 mx-auto flex justify-center">
                                <input :value="originTitle" @input="originTitle = $event.target.value" type="text" class="px-5 py-2 rounded-l-full bg-rose-100 placeholder-rose-400 w-full outline-none border-none rounded-xl focus:border-rose-600 focus:ring-1 focus:ring-rose-600" placeholder="예배 동영상(유튜브)의 원 제목을 입력하세요.">
                                <button
                                    @click="processingOriginTitle"
                                    class="px-5 rounded-r-full bg-rose-500 text-white"
                                    type="button"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 4v16m8-8H4"
                                    />
                                    </svg>
                                </button>
                            </div>
                            <!-- End Of YOUTUBE Origin Title Input -->

                             <!-- Title Input -->
                             <div class="my-3 mx-auto">
                                <input v-model="title" type="text" class="w-full mt-2 p-4 outline-none border-none rounded-xl focus:border-epic-blue focus:ring-1 focus:ring-epic-blue" placeholder="예배 동영상의 가공된 제목">
                            </div>
                             <!-- Speaker Input -->
                             <div class="my-3 mx-auto">
                                <input v-model="speaker" type="text" class="w-full mt-2 p-4 outline-none border-none rounded-xl focus:border-epic-blue focus:ring-1 focus:ring-epic-blue" placeholder="강사 이름">
                            </div>
                             <!-- Verse Input -->
                             <div class="my-3 mx-auto">
                                <input v-model="verse" type="text" class="w-full mt-2 p-4 outline-none border-none rounded-xl focus:border-epic-blue focus:ring-1 focus:ring-epic-blue" placeholder="성경구절">
                            </div>
                             <!-- CreatedAt Input -->
                             <div class="my-3 mx-auto">
                                <input v-model="pbDate" type="text" class="w-full mt-2 p-4 outline-none border-none rounded-xl focus:border-epic-blue focus:ring-1 focus:ring-epic-blue" placeholder="날짜">
                            </div>
                            <!-- SUBMIT BUTTON -->
                            <button type="submit" class="w-full p-3 mt-2 bg-red-500 text-lg text-white rounded-md outline-none border-none font-bold tracking-wide transition-all hover:bg-red-500/50">전송</button>
                            <!-- END OF SUBMIT BUTTON -->
                        </form>
                    </div>
                </div>
                <!-- END OF FORM -->
            </div>
        </section>
    </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useRouter } from "vue-router";
import { useWorshipStore } from "../../stores/worships";

import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko"); // global로 한국어 locale 사용

export default {
    setup () {

        /* Router */
        const router = useRouter();

        /* Pinia */
        const store = useWorshipStore();

        const ytUrl = ref("");                                      // youtube 예배 url

        const originTitle = ref("");                                // youtube 예배 url
        
        const title = ref("");                                      // youtube 예배 제목
        const verse = ref("");                                      // youtube 예배 구절
        const speaker = ref("");                                    // youtube 예배 강사
        const pbDate = ref("");                                  // youtube 예배 생성날짜
        const play = ref(false);                                    // youtube thumbnail 이미지 클릭 여부
        const videoId = ref('');                                    // youtube 예배 URL에서 추출한 videoId
        const belong = ref('');                                     // youtube 소속 ex.)주일예배 목요예배 etc
        const tag = ref('');
        const author = ref('');                                     // 예배글 작성자
        const convertedAt = ref('');
        const color = ref('');                                      // 예배 색상

        onMounted(() => {
            var iframes = document.getElementsByClassName('selectedVideoEmbed');
            iframes[0].setAttribute("src", `https://youtube.com/embed/${videoId}?controls=1&autoplay=0`);
            console.log('iframe:', iframes[0].getAttribute('html'));
        })

        const extractVideoID = (url) => {
            var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
            var match = url.match(regExp);
            if (match && match[7].length == 11) {
                console.log(match[7])
                /* return match[7]; */
                videoId.value = match[7];
            } else {
                alert("Could not extract video ID.");
            }
        }

        const processingOriginTitle = () => {
            let titleArr = originTitle.value.split(/[/]/);

            title.value = titleArr[0].replace("[Live]","").trim(),

            tag.value = originTitle.value.indexOf('목요') !== -1 ? titleArr[1].substr(-5): titleArr[3].substr(-4)
            verse.value = originTitle.value.indexOf('목요') !== -1 ? titleArr[2]: titleArr[1]
            speaker.value = originTitle.value.indexOf('목요') !== -1 ? titleArr[3]: titleArr[2]
            color.value = originTitle.value.indexOf('목요') !== -1 ? 'bg-[#95E1D3]': 'bg-carnation-pink-400'
            pbDate.value = originTitle.value.indexOf('목요') !== -1 ? dayjs(titleArr[1].replace("목요예배","").trim()).format("YYYY.MM.DD"): dayjs(titleArr[3].replace("주일예배","").trim()).format("YYYY.MM.DD")
            belong.value = originTitle.value.indexOf('목요') !== -1 ? '목요예배': '주일예배'
            author.value = '관리자'
            
        }

        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        const isPlay = () => {
            play.value = !play.value;
        }
        
        /* 예배 데이터 전송하기(create) */
        const onSubmit = () => {
            /* 필수 입력: 유효성 검사 */
            if (title.value==="" || verse.value==="" || speaker.value==="" || ytUrl.value==="" || videoId.value==="" || belong.value==="" || author.value==="" || color.value==="" || pbDate.value==="") {
                alert("모두 입력해주세요.!")
                return;
            }
            
            const worship = {
                originTitle: originTitle.value,
                title: title.value,
                verse: verse.value,
                speaker: speaker.value,
                ytUrl: ytUrl.value,
                videoId: videoId.value,
                belong: belong.value,
                author: author.value,
                color: color.value,
                pbDate: dayjs(pbDate.value),
            }

            store.createWorship(worship).then(() => {
                router.go(-1);
                router.go(-1);
            })
        }
                
        return {
            ytUrl,
            videoId,
            originTitle,
            title,
            verse,
            speaker,
            pbDate,
            belong,
            tag,
            isPlay,
            extractVideoID,
            processingOriginTitle,
            onSubmit,
            play,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>