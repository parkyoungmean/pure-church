<template>
    <!-- maxresdefault.jpg or hqdefault.jpg  -->
    <div class="worship-card relative">
        <img @click="toggleModal" class="imageStyle" :src="`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`" style="width:100%; height:100%;">
        <button @click="toggleModal" class="btn">
            <i class="fab fa-youtube text-2xl xl:text-3xl" style="color:red"></i>
        </button>
        <div v-show="path!=='/worships'" class="absolute bottom-0 flex items-center jsustify-center text-white text-[0.95rem]">
            <p :class="[item.belong === '어린이예배' ? 'bg-[#f9d423]' : item.belong === '청소년예배' ? 'bg-[#09A6FF]' : item.belong ==='간증' ? 'bg-[#7978FF]' : item.color]" class="w-22 text-center font-extrabold p-0.5">{{item.belong}}</p>
            <h5 v-show="true" class="card-text font-semibold bg-gray-900/50 w-48 px-3">{{ item.convertedAt }}</h5>
            <!-- <div v-show="item.title===''" class="d-flex justify-content-between align-items-center">
                <small class="text-muted">{{ item.pubDate }}</small>
            </div> -->
        </div>
    </div>
    <h5 class="card-text font-semibold text-md">{{ item.originTitle }}</h5>
    
</template>

<script>
import { computed } from "vue-demi";
import { useRoute } from "vue-router";
import { useWorshipStore } from "../../stores/worships";

export default {
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    setup (props) {

        /* Route */
        const route = useRoute();

        /* Pinia */
        const store = useWorshipStore();

        const toggleModal = () => {
            store.currentWorship = props.item;
            store.toggleModal();
        };

        return {
            toggleModal,
            path: computed( ()=> route.path),
        }
    }
}
</script>

<style lang="scss" scoped>
.worship-card {
    .btn {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform .3s ease, box-shadow .3s ease;
    }
    
    @media (hover: hover) and (pointer: fine) {
        &:hover::before {
            opacity: .8;
        }

        &:hover .btn {
            transform: translate(-50%, -50%) scale(1);
        }
    }
}
</style>