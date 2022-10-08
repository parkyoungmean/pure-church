<template>
    <div>
        <!-- 예배 영상 -->
        <iframe v-show="false" class="videoEmbed" vnum='0' :pid="pid" width="100%" height="100%" frameborder="0" allowfullscreen autoplay></iframe>
        <div class="">
            <Swiper
            :slides-per-view="5"
            :space-between="50"
            :modules="modules"
            :breakpoints="{
                '320': {
                slidesPerView: 2,
                spaceBetween: 10,
                },
                '480': {
                slidesPerView: 3,
                spaceBetween: 20,
                },
                '640': {
                slidesPerView: 4,
                spaceBetween: 25,
                },
                '768': {
                slidesPerView: 4,
                spaceBetween: 30,
                },
                '1024': {
                slidesPerView: 5,
                spaceBetween: 35,
                },
                '1920': {
                slidesPerView: 6,
                spaceBetween: 40,
                },
                '2568': {
                slidesPerView: 7,
                spaceBetween: 45,
                },
            }"
            >
                <swiper-slide v-for="item in worships" :key="item.guid">
                    <!-- maxresdefault.jpg or hqdefault.jpg  -->
                    <img class="imageStyle" :src="`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`" style="width:100%; height:100%;">

                    <div class="card-body">
                        <h5 class="card-text text-xs font-semibold xs:text-sm">{{ item.title }}</h5>
                        <div class="d-flex justify-content-between align-items-center">
                        <small class="text-muted">{{ item.pubDate }}</small>
                        </div>
                    </div>
                </swiper-slide>
            </Swiper>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import axios from "axios";

import { Swiper,SwiperSlide } from "swiper/vue";
import { Thumbs } from "swiper";

import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko"); // global로 한국어 locale 사용


const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
});

export default {
    props: {
        pid: String
    },
    components: {
        Swiper,
        SwiperSlide
    },
    setup (props, context) {

        const worships = ref([]);
        
        onMounted(() => {
            var iframes = document.getElementsByClassName('videoEmbed');
            for (var i = 0, len = iframes.length; i < len; i++) {
                loadVideo(iframes[i]);
            }
        })

        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        const loadVideo = async (iframe) => {
            
            const playlistURL = encodeURIComponent(`https://www.youtube.com/feeds/videos.xml?playlist_id=${props.pid}`)
            const reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${playlistURL}`;

            await fetch(reqURL, requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(result.items);
                    const videoNumber = (iframe.getAttribute('vnum') ? Number(iframe.getAttribute('vnum')) : 0);

                    let worshipArray = [];

                    result.items.forEach((v) => {
                        let worship = v;

                        worshipArray.push({
                            id: worship.guid,
                            link: worship.link,                                                         // original url
                            videoId: worship.link.substr(worship.link.indexOf("=") + 1),                // video id
                            title: worship.title,
                            belong: worship.belong || '주일예배',
                            author: worship.author || '관리자',
                            width: '640',
                            height: '480',
                            createdAt: worship.pubDate,
                            convertedAt: dayjs(worship.pubDate).format("YYYY년 MM월 DD일"),
                            updatedAt: worship.UpdatedAt,
                            status: worship.Status,
                        });
                    });
                    worships.value = worshipArray;
                    console.log(worships.value);
                })
                .catch(error => console.log('error', error));
        }
       
        return {
            modules: [Thumbs],
            worships,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>