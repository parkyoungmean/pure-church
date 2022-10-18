<template>
    <div class="min-h-screen items-center justify-center">
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
            <section class="header py-10 md:py-15">
                <div class="mx-auto px-6 sm:px-8 md:px-12 sm:w-full md:max-w-5xl xl:max-w-6xl 2xl:min-w-[1100px] 3xl:max-w-[1250px] 4xl:max-w-[1200px] 5xl:max-w-[1300px] 6xl:max-w-[1500px] 7xl:max-w-[1500px] 8xl:max-w-[1600px]">
                    <h2 class="text-2xl font-semibold md:text-3xl text-center">전체 예배</h2>
                    <!-- Add Worship Button -->
                    <div class="right flex justify-end items-center text-xs md:text-lg my-10">
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
                        <button @click="createAllWorships()" class="flex items-center justify-center text-lg">
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
        
        const createAllWorships = () => {
            const cid = 'UC9LuMbo8JtxglIrjRI_wU4A';

            console.log(cid);

            let payload = {
                cid: cid
            }

            store.createAllWorships(payload).then(() => {  

            })
        };

        return {
            worships,
            worshipFormOpen,
            createAllWorships,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>