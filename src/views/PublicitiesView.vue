<template>
    <div>
        <section class="py-20 text-center">
            <div class="mx-auto mzx-w-7xl px-6 sm:px-8 md:px-12">
                <h2 class="text-2xl font-semibold md:text-3xl">광고 관리</h2>
                <p class="mx-auto mt-3 max-w-xl text-sm">메인 홈페이지의 슬라이드 광고를 관리합니다.</p>

                <div class="right flex justify-end items-center text-xs md:text-lg">
                    <!-- Add Publicity Button -->
                    <div
                        @click="addPublicityForm()"
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
                        "
                    >
                        <div class="inner-button flex">
                        <i
                            class="
                            fas
                            fa-plus
                            text-purple-700
                            p-1
                            md:p-1
                            5
                            rounded-full
                            bg-white
                            "
                        ></i>
                        </div>
                        <div class="text-white">추가하기</div>
                    </div>
                </div>
                <!-- Publicities Screen -->
                <div class="relative mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div v-for="(publicity, index) in publicities" :key="index" class="grid2-item bg-orange-100">
                        <h1 class="title absolute font-bold text-xl px-12 py-16" :class="`${publicity.color.titleTextColor}`" >{{ publicity.title }}</h1>
                        <img :src="`${publicity.img.link}`" class="bg-center bg-cover bg-no-repeat w-full h-full" alt="">
                        <!-- Update & Delete Button -->
                        <div class="flex justify-end space-x-2 xl:space-x-2.5 mr-5 -mt-10 xl:-mt-20 md:mr-10 xl:mr-10">
                            <button
                                @click="editPublicityForm(publicity.id)"
                                class="
                                inline-flex
                                justify-center
                                px-2
                                sm:px-2
                                xl:px-4
                                py-1
                                sm:py-1
                                xl:py-1.5
                                text-sm
                                sm:text-xs
                                xl:text-lg
                                font-bold
                                xl:font-extrabold
                                sm:font-medium
                                text-white
                                bg-epic-blue
                                border border-transparent
                                rounded-md
                                hover:bg-blue-200
                                focus:outline-none
                                focus-visible:ring-2
                                focus-visible:ring-offset-2
                                focus-visible:ring-blue-500
                                "
                            >
                                수정
                            </button>
                            <button
                                class="
                                inline-flex
                                justify-center
                                px-2
                                sm:px-2
                                xl:px-4
                                py-1
                                sm:py-1
                                xl:py-1.5
                                text-sm
                                sm:text-xs
                                xl:text-lg
                                font-bold
                                sm:font-medium
                                xl:font-extrabold
                                text-white
                                bg-red-600
                                border border-transparent
                                rounded-md
                                hover:bg-blue-200
                                focus:outline-none
                                focus-visible:ring-2
                                focus-visible:ring-offset-2
                                focus-visible:ring-blue-500
                                "
                            >
                                삭제
                            </button>
                        </div>
                    </div>
                </div>
                <!-- End Of Publicities Screen -->
            </div>
        </section>
    </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { usePublicityStore } from "../stores/publicities";
import { getCurrentBreakpoint } from "../common/common";

export default {
    setup () {
        
        const router = useRouter();

        /* Pinia */
        const store = usePublicityStore();
        
        const publicities = computed(() => {
            return store.publicities;
        })

        onMounted(() => {
            store.fetchPublicities();
        })

        /* Create Publicity */
        const addPublicityForm = () => {

            /* If Mobile screen */
            if (getCurrentBreakpoint().value < 769) {
                alert('광고 추가하기는 데스크탑 화면에서만 가능합니다.');
                return;
            } else {
                router.push("/publicityregistration");
            }
            
        };

        /* Update Publicity */
        const editPublicityForm = (id) => {

            /* If Mobile screen */
            if (getCurrentBreakpoint().value < 769) {
                alert('광고 수정 기능은 데스크탑 화면에서만 가능합니다.');
                return;
            } else {
                store.selectedPublicity(id);
                router.push("/publicityedit");
            }
        };

        return {
            publicities,
            addPublicityForm,
            editPublicityForm,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>