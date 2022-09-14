<template>
    <div class="min-h-screen items-center justify-center" >
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
                    <h2 class="text-2xl font-semibold md:text-3xl p-2 md:p-5">공지사항 등록하기</h2>
                    <div class="bg-gray-200/60 md:w-2/5 p-6 rounded-lg shadow-md">
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
                            <!-- Image Upload -->
                            <div class="p-3 mb-2">
                                <!-- Image Select -->
                                <div v-if="!tempImg || tempImg.length===0" class="relative h-60 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center hover:cursor-pointer">
                                    <div class="absolute">
                                        <div class="flex flex-col items-center justify-center mt-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="#D1D5DB" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <span class="block text-xs md:text-lg text-gray-400 font-normal">이미지 파일을 드래그해주세요.</span>
                                            <span class="block text-xs md:text-lg text-gary-400 font-normal">혹은</span>
                                            <span class="block text-xs md:text-lg text-gary-400 font-normal">여기를 클릭해서 파일을 선택하세요.</span>
                                            <span class="block text-md md:text-xl text-blue-400 font-normal">파일 찾아보기</span>
                                        </div>
                                    </div>
                                    <input @change="changeImageFile" type="file" class="w-full h-full opacity-0">
                                </div>
                                <!-- Image Preview -->
                                <img v-else :src="tempImg" alt="" class="block w-auto h-60 lg:h-96 p-5 mx-auto">
                                <!-- Image Info & Reset -->
                                <div v-if="img.length!==0" class="flex justify-between items-center text-gray-400 mt-2">
                                    <span>파일 이름: {{ img.name.length > 16 ? img.name.substring(0, 17) + "..." : img.name }} </span>
                                    <button @click="tempImg=[]; img=[];" type="button" class="p-1.5 text-xs rounded-sm cursor-pointer" :class="img.length!==0 ? 'bg-blue-300 text-white' : 'bg-gray-200'">초기화</button>
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

        /* Image Select */
        const changeImageFile = (e) => {
            console.log(e.target.files[0]);
            tempImg.value = URL.createObjectURL(e.target.files[0]);
            img.value = e.target.files[0];
        }

        const onSubmit = async () => {
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

            /* Upload Image */
            let rimg = [];

            /* 이미지가 존재하는지 검사 */
            if (img.value!=='') {

                await imgStore.uploadImage(img.value)
                .then(() => {
                    rimg = imgStore.currentImage;
                })
            }

            const notice = {
                primary: isPrimary.value,
                title: title.value,
                content: content.value,
                condition: condition.value,
                belong: belong.value,
                author: '관리자',
                img: JSON.stringify(rimg),
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
            changeImageFile,
            onSubmit,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>