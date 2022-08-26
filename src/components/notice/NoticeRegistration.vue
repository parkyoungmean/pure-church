<template>
    <div class="min-h-screen items-center justify-center" >
        <section class="header text-center">
            <div class="mx-auto max-w-7xl px-6 sm:px-8 md:px-12">
                <!-- Close Button -->
                <div class="flex justify-end p-6">
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
                <div class="flex flex-col items-center justify-center  ">
                    <h2 class="text-2xl font-semibold md:text-3xl p-5">공지사항 등록하기</h2>
                    <div class="bg-gray-200/60 w-2/5 p-6 rounded-lg shadow-md">
                        <form action="" @submit.prevent="onSubmit">
                            <!-- Primary Check -->
                            <div class="flex items-center">
                                <input v-model="isPrimary" type="checkbox" id="primary" class="w-5 h-5 rounded border-gray-300" >
                                <label for="primary" class="ml-2 block text-sm text-gray-900"> <span class="text-red-500 font-bold">메인</span>에 등록하겠습니까?</label>
                            </div>
                            <!-- Title Input -->
                            <div class="my-3 mx-auto">
                                <input v-model="title" type="text" class="w-full mt-2 p-4 outline-none border-none rounded-xl focus:border-epic-blue focus:ring-1 focus:ring-epic-blue" placeholder="공지사항 제목을 입력하세요.">
                            </div>
                            <!-- Content Input -->
                            <div class="my-3 mx-auto">
                                <textarea type="text" :value="content" @input="content = $event.target.value" class="w-full h-36 mt-2 p-4 outline-none border-none rounded-lg focus:border-epic-blue focus:ring-1 focus:ring-epic-blue" placeholder="내용을 입력하세요." />
                            </div>
                            <!-- Belong Selecter -->
                            <div class="my-3 flex items-center space-x-1">
                                <label for="belong" class="block text-sm md:text-lg font-medium text-gray-700">소속:</label>
                                <div class="">
                                    <select v-model="belong" name="belong" id="belong" class="appearance-none w-full border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:border-epic-blue focus:ring-1 focus:ring-epic-blue">
                                        <option value="">선택하세요.</option>
                                        <option value="전체">전체</option>
                                        <option value="필독">필독</option>
                                        <option value="복음학교">복음학교</option>
                                        <option value="치유학교">치유(The Day)학교</option>
                                        <option value="카르학교">친밀감(Kar)학교</option>
                                        <option value="기도학교">능력의 기도(BAP)학교</option>
                                        <option value="사랑학교">사랑학교</option>
                                        <option value="사역자학교">사역자학교</option>
                                    </select>
                                </div>
                            </div>
                            <!-- Condition Selecter -->
                            <div class="my-3 flex items-center space-x-1">
                                <label for="belong" class="block text-sm md:text-lg font-medium text-gray-700">중요도:</label>
                                <div class="">
                                    <select v-model="condition" name="condition" id="condition" class="appearance-none w-full border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:border-epic-blue focus:ring-1 focus:ring-epic-blue">
                                        <option value="">선택하세요.</option>
                                        <option value="emergency">긴급 공지</option>
                                        <option value="important">중요 공지</option>
                                        <option value="standard">일반 공지</option>
                                        <option value="information">정보 안내</option>
                                    </select>
                                </div>
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
import { ref } from "vue-demi";
import { useRouter } from "vue-router";
import { useNoticeStore } from "../../stores/notices";
import { useImageStore } from "../../stores/images";

export default {
    setup () {
        const router = useRouter();
        const store = useNoticeStore();
        const imgStore = useImageStore();

        const isPrimary = ref("");        // 메인 등록 여부
        const title = ref("");              // 제목
        const content = ref("");            // 내용
        const condition = ref("");          // 중요도 ex. 긴급, 중요 etc
        const belong = ref("");             // 소속 ex. 전체, ~학교 etc
        const author = ref("");             // 저자 
        const tempImg = ref("");            // 임시 이미지
        const img = ref("");                // 이미지

        const onSubmit = () => {
            /* 필수 입력 검사 */
            if (
                title.value === "" ||
                content.value === "" ||
                condition.value === "" ||
                belong.value === ""
            ) {
                alert("필수입력 항목을 입력해주세요!");
                return;
            }

            const notice = {
                isPrimary: isPrimary.value,
                title: title.value,
                content: content.value,
                condition: condition.value,
                belong: belong.value,
                author: '관리자',
                img: JSON.stringify(img.value),
            }

            console.log('새 공지사항은?', notice);

            store.createNotice(notice).then(() => {
                router.go(-1);
            })
        }

        return {
            isPrimary,
            title,
            content,
            condition,
            belong,
            author,
            tempImg,
            img,
            onSubmit,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>