<template>
    <!-- maxresdefault.jpg or hqdefault.jpg  -->
    <div class="worship-card relative">
        <img class="imageStyle" :src="`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`" style="width:100%; height:100%;">
        <button class="btn">
            <i class="fab fa-youtube text-2xl xl:text-3xl" style="color:red"></i>
        </button>
    </div>
    <div class="card-body">
        <h5 class="card-text text-xs font-semibold xs:text-sm">{{ item.title }}</h5>
        <div class="d-flex justify-content-between align-items-center">
        <small class="text-muted">{{ item.pubDate }}</small>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    setup () {
        

        return {}
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