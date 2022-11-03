<template>
    <div class="main-h-screen itmes-centser jsustify-center">
        <div class="mx-auto w-full xl:max-w-7xl 2xl:max-w-[1640px] px-3 sm:px-6 md:px-8 md:px-12">
            <div class="flex justify-end pt-3">
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
                    itmes-center
                    focus:outline-none
                    "
                >
                    <i class="fas fa-arrow-left"></i>
                </button>
            </div>
            <section class="header py-10 md:py-15">
                <div class="mx-auto max-w-7xl px-6 sm:px-8 md:px-12">
                    <h2 class="text-2xl font-semibold md:text-3xl">{{bulletin.title}}</h2>
                    <div v-for="(img, index) in bulletin.imgs" :key="index">
                        <img :src="`${img.link}`" alt="" class="my-5">
                    </div>
                    <!-- Update & Delete Button -->
                    <div
                        v-show="is_login ? true : false"
                        class="
                            flex
                            justify-end
                            space-x-2
                            xl:space-x-2.5
                            mt-10
                            xl:mt-20
                        "
                    >
                        <button
                            @click="editBulletinForm"
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
                            @click="deleteBulletin"
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
                    <!-- End Of Update & Delete Button -->
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { useBulletinStore } from "../../stores/bulletins";

export default {
    setup () {
        const router = useRouter();

        /* Vuex */
        const vuexStore = useStore();

        /* Pinia */
        const store = useBulletinStore();

        const bulletin = computed(() => {
            return store.currentBulletin;
        })

        /* Update Bulletin Infomation */
        const editBulletinForm = (id) => {
            router.push("/bulletinedit");
        };

        /* Delete Bulletin */
        const deleteBulletin = () => {
            const id = store.currentBulletin.id;

            if (confirm("정말 삭제합니까?")) {

                store.deleteBulletin(id).then(() => {
                    router.go(-1);
                });
            } else {
                alert("취소되었습니다.");
            }
        };

        return {
            bulletin,
            editBulletinForm,
            deleteBulletin,
            is_login: computed(() => vuexStore.state.is_login),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>