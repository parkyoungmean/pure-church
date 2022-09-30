<template>
    <div>
        <!-- Add Gallery Button -->
        <div class="right flex justify-end items-center text-xs md:text-lg">
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
        </div>
        <!-- Youtube's Thumbnail List -->
        <!-- <div class="album py-5 bg-light">
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div class="col" v-for="item in worships" :key="item.guid">
                        <div class="card shadow-sm">
                            <img class="imageStyle" :src="`https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`" style="width:100%; height:300px;">
                            <div class="card-body">
                                <h5 class="card-text">{{ item.title }}</h5>
                                <div class="d-flex justify-content-between align-items-center">
                                <small class="text-muted">{{ item.pubDate }}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
        <!-- End Of Youtube's Thumbnail List -->
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRouter } from "vue-router";
import axios from "axios";


const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
});

export default {
    components: {
        
    },
    setup () {
        
        const router = useRouter();

        /* const worships = ref([]);
        const primaryId = ref('');
        const latestWorship = ref(null); */
        /* var reqURL = "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent("https://www.youtube.com/feeds/videos.xml?channel_id=");
 */
        onMounted(() => {
            
        
            /* var iframes = document.getElementsByClassName('latestVideoEmbed');
            for (var i = 0, len = iframes.length; i < len; i++) {
                loadVideo(iframes[i]);
            } */
        })

        /* function loadVideo(iframe) {

            const data = instance(reqURL + iframe.getAttribute('cid'))

            let worshipArray = [];

            $.getJSON(reqURL + iframe.getAttribute('cid'),
                function(data) {
                var videoNumber = (iframe.getAttribute('vnum') ? Number(iframe.getAttribute('vnum')) : 0);
                console.log(videoNumber);
                var link = data.items[videoNumber].link;
                var title=data.items[videoNumber].title;
                id = link.substr(link.indexOf("=") + 1);
                iframe.setAttribute("src", "https://youtube.com/embed/" + id + "?controls=0&autoplay=1");
                iframe.parentElement.querySelector("#video-title").innerText = title;
                }
            );
            let vv= {...data};
            console.log(vv);
            console.log(Object.keys(data));
        } */




        /* Create Worship Infomation */
        const worshipFormOpen = () => {
            router.push("/worshipregistration");
        };

        /* const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        let videoList = []; 

        const loadVideo = (iframe) => {
            
            const cid = iframe.getAttribute('cid');
            const channelURL = encodeURIComponent(`https://www.youtube.com/feeds/videos.xml?channel_id=${cid}`)
            const reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${channelURL}`;

            const pid = iframe.getAttribute('pid'); 
            
            
            // 주일 예배 플레이리스트 id
            const pid = 'PL13DkA-MmUMtDgdl9Gz_lU5iJ5lWPBEM-';
            const playlistURL = encodeURIComponent(`https://www.youtube.com/feeds/videos.xml?playlist_id=${pid}`)
            const reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${playlistURL}`;

            fetch(reqURL, requestOptions)
                .then(response => response.json())
                .then(result => {
                    const videoNumber = (iframe.getAttribute('vnum') ? Number(iframe.getAttribute('vnum')) : 0);
                    console.log(videoNumber);
                    
                    latestWorship.value.push({ 
                        link: result.items[videoNumber].link, 
                        title: result.items[videoNumber].title 
                    }); 
                    
                    console.log(latestWorship.value.title);

                    const link = result.items[videoNumber].link;
                    const id = link.substr(link.indexOf("=") + 1);

                    primaryId.value = result.items[videoNumber].id

                    iframe.setAttribute("src", `https://youtube.com/embed/${id}?controls=0&autoplay=1`);
                    
                    videoList = result.items;
                    console.log(videoList);

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
        */

        return {
            worshipFormOpen,
            /* videoList,
            latestWorship,
            worships,
            primaryId, */
        }
    }
}
</script>

<style lang="scss" scoped>

</style>