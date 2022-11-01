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
                    <h2 class="text-2xl font-semibold md:text-3xl p-2 md:p-5">주보 등록하기</h2>
                    <div class="bg-gray-200/60 md:w-2/5 p-6 rounded-lg shadow-md">
                        <form action="" @submit.prevent="onSubmit">
                            <!-- Title Input -->
                            <div class="my-3 mx-auto">
                                <input v-model="title" type="text" class="w-full mt-2 p-4 outline-none border-none rounded-xl focus:border-epic-blue focus:ring-1 focus:ring-epic-blue" placeholder="주보 제목을 입력하세요.">
                            </div>
                            <!-- Image Upload -->
                            <MultipleUploads 
                            :tempImgs="tempImgs"
                            :imgs="imgs"
                            :newCnt="newCnt"
                            @on-change="changeImageFile"
                            @on-remove="removeItem"
                            />
                            <!-- SUBMIT BUTTON -->
                            <button type="submit" class="w-full p-3 mt-2 bg-red-500 text-lg text-white roudned-md outline-none border-none font-bold tracking-wide transition-all hover:bg-red-500/50">전송</button>
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
import router from '@/router';
import { ref } from 'vue';
import { useBulletinStore } from "../../stores/bulletins";
import { useImageStore } from "../../stores/images";
import MultipleUploads from "../common/MultipleUploads.vue";

export default {
    components: {
        MultipleUploads,
    },
    setup () {
        const store = useBulletinStore();
        const imgStore = useImageStore();
        
        const title = ref("");                  // 제목
        const tempImgs = ref([]);               // 임시 이미지
        const imgs = ref([]);                   // 이미지
        const newCnt = ref(0);
       
        /* Images Select */
        const changeImageFile = (e) => {
            const files = e.target.files;

            imgs.value = [...imgs.value, ...files ];

            newCnt.value = newCnt.value + files.length;

            tempImgs.value = [
                ...tempImgs.value,
                ..._.map(files, file => ({
                    name: file.name,
                    size: file.size,
                    type: file.type,
                    invalidMessage: validate(file)
                }))
            ]
        }

        const removeItem = (index) => {
            tempImgs.value.splice(index, 1);
            imgs.value.splice(index, 1);
            newCnt.value = newCnt.value - 1 ;
            console.log('제거 후 newCnt:', newCnt.value);
        };

        /* Validate Check */
        const validate = (file) => {
            const MAX_SIZE = 10485760*1;                                // 10MB
            const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
            
            if (file.size > MAX_SIZE) {
                return `파일 업로드는 ${MAX_SIZE/1024/1024}MB를 초과할 수 없습니다.`;
            }

            if (!allowedTypes.includes(file.type)) {
                return "이미지 파일이 아닙니다.";
            }

            return "";
        }

        const onSubmit = async () => {
            
            /* 필수 입력 검사 */
            if (title.value === "") {
                alert("필수 입력 항목을  입력해주세요!")
                return;
            }

            if (newCnt.value === 0) {
                alert("새로 업로드할 사진을 선택해주세요!")
                return;
            } 

            if (newCnt.value > 20) {
                return "사진 업로드 제한선인 20개를 초과하였습니다!"
            }
            
             /* Upload Image */
             for (const file of imgs.value) {
                
                if(validate(file) === "") {
                    await imgStore.uploadMultipleImages(file)
                    .then(() => {
                        
                    })
                }
            }

            const bulletin = {
                title: title.value,
                category: 'bulletin',
                belong: '전체',
                author: '관리자',
                imgs01: JSON.stringify(imgStore.currentImages01),
                imgs02: JSON.stringify(imgStore.currentImages02),
            }

            console.log('새 주보는?', bulletin);

            store.cretaeBulletin(bulletin).then(() => {
                router.go(-1);
            })
        }

        return {
            title,
            tempImgs,
            imgs,
            newCnt,
            changeImageFile,
            removeItem,
            onSubmit,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>