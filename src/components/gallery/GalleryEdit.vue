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
                    <h2 class="text-2xl font-semibold md:text-3xl p-2 md:p-5">갤러리 수정하기</h2>
                    <div class="bg-gray-200/60 md:w-2/5 p-6 rounded-lg shadow-md">
                        <form action="" @submit.prevent="onSubmit">
                            <!-- Belong Selecter -->
                            <div class="my-3 flex items-center space-x-1">
                                <label for="belong" class="block text-sm md:text-lg font-medium text-gray-700">소속:</label>
                                <div class="">
                                    <select v-model="belong" name="belong" id="belong" class="appearance-none w-full border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:border-epic-blue focus:ring-1 focus:ring-epic-blue">
                                        <option value="">선택하세요.</option>
                                        <option value="전체">전체</option>
                                        <option value="복음학교">복음학교</option>
                                        <option value="치유학교">치유(The Day)학교</option>
                                        <option value="카르학교">친밀감(Kar)학교</option>
                                        <option value="기도학교">능력의 기도(BAP)학교</option>
                                        <option value="사랑학교">사랑학교</option>
                                        <option value="사역자학교">사역자학교</option>
                                    </select>
                                </div>
                            </div>
                            <!-- Title Input -->
                            <div class="mt-3 mx-auto">
                                <input v-model="title" type="text" class="w-full mt-2 p-4 outline-none border-none rounded-xl focus:border-epic-blue focus:ring-1 focus:ring-epic-blue" placeholder="갤러리 제목을 입력하세요.">
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
import { ref, computed, onMounted } from "vue-demi";
import { useRouter } from "vue-router";
import { useGalleryStore } from "../../stores/gallery";
import { useImageStore } from "../../stores/images";
import MultipleUploads from "../common/MultipleUploads.vue";

export default {
    components: {
        MultipleUploads,
    },
    setup () {
        const router = useRouter();
        const store = useGalleryStore();
        const imgStore = useImageStore();

        const currentGallery = computed(() => {
            return store.currentGallery;
        });

        const title = ref(currentGallery.value.title);                   // 제목
        const category = ref(currentGallery.value.category);             // 카테고리 ex.갤러리, 주보 etc
        const belong = ref(currentGallery.value.belong);                 // 소속 ex.전체, ~학교 etc
        const author = ref(currentGallery.value.author);                 // 저자 
        const tempImgs = ref([]);                                        // 임시 이미지
        const imgs = ref([]);                                            // 이미지
        const newCnt = ref(0);

        /* 기존의 이미지 파일을 tempImg와 imgs에 저장하여 사용합니다. */
        onMounted(() => {
            console.log(currentGallery.value);
            tempImgs.value = currentGallery.value.imgs;
            console.log('tempImgs:', tempImgs.value);

            imgs.value = currentGallery.value.imgs;

            console.log('imgs:', imgs.value);

        });

        /* Images Select */
        const changeImageFile = (e) => {

            const files = e.target.files;

            /* 새 업로드 이미지가 있을 경우에만 */
            if (files.length > 0) {

                newCnt.value = newCnt.value + files.length;

                imgs.value = [
                    ...imgs.value, 
                    ...files 
                ];

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
        }

        /* Validate Check */
        const validate = (file) => {
            const MAX_SIZE = 10485760*1;                                        // 10MB
            const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
            
            /* 새로운 파일인 경우에만 유효성 검사를 합니다. */
            if (file.name) {
                if (file.size > MAX_SIZE) {
                    return `파일 업로드는 ${MAX_SIZE/1024/1024}MB를 초과할 수 없습니다.`;
                }

                if (!allowedTypes.includes(file.type)) {
                    return "이미지 파일이 아닙니다.";
                }

                return "";
            }
        }

        const removeItem = (img) => {
            let index = tempImgs.value.findIndex((item) => item===img);

            /* 새롭게 업로드하는 이미지일 경우 */
            if (index !== -1 && img.name) {

                tempImgs.value.splice(index, 1);
                imgs.value.splice(index, 1);
                newCnt.value = newCnt.value - 1;

            } else if (index !== -1 && img.link) {
                
                tempImgs.value.splice(index, 1);

                var nindex = imgs.value.findIndex((item) => item===img);
                
                if (nindex !== -1) {
                    imgs.value.splice(nindex, 1);
                }
            } else {
                console.log('존재하지 않는 이미지입니다.', index);
            }
        };

        const onSubmit = async () => {
            /* 필수 입력 검사 */
            if (title.value === "" || belong.value === "" ) {
                alert("필수입력 항목을 입력해주세요!")
                return;
            }

            if (newCnt.value + imgs.value.length === 0) {
                alert("새로 업로드할 사진을 선택해주세요!")
                return;
            } 
            
            if (newCnt.value > 20) {
                return "새로 업로드하는 사진 제한선인 20개를 초과하였습니다!"
            }

            if (imgs.value.length > 40) {
                return "최종 사진 제한선인 40개를 초과하였습니다!"
            }

            /* Upload Image */
            for (const file of imgs.value) {

                /* file.name인 경우는 새로 업로드하는 파일이므로 이미지 업로드 로직을 실행합니다. */
                if (file.name) {
                    
                    if(file && validate(file) === "") {
                        
                        await imgStore.uploadMultipleImages(file)
                        .then(() => {
                            
                        })
                    }
                }

                /* file.link인 경우는 기존에 업로드한 파일이므로 이미지 업로드 대상에서 제외하고 데이터만 저장합니다. */
                if (file.link) {
                    
                    if (imgStore.currentImages01.length < 11) {
                        imgStore.currentImages01.push(file);
                    } else {
                        imgStore.currentImages02.push(file);
                    }
                }
            }

            const gallery =  {
                id: currentGallery.value.id,
                title: title.value,
                category: category.value,
                belong: belong.value,
                author: author.value,
                imgs01: JSON.stringify(imgStore.currentImages01),
                imgs02: JSON.stringify(imgStore.currentImages02),
                createdAt: currentGallery.value.createdAt,
            }

            /* 갤러리 글 로딩 start */
            imgStore.toggleLoading();

            store.updateGallery(gallery).then(() => {
                router.go(-2);

                /* 갤러리 글 로딩 end */
                imgStore.toggleLoading();
            })
        }

        return {
            title,
            category,
            belong,
            author,
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