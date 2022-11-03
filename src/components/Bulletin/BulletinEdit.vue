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
                    <h2 class="text-2xl font-semibold md:text-3xl p-2 md:p-5">주보 수정하기</h2>
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
import { ref, computed, onMounted } from 'vue';
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

        const currentBulletin = computed(() => {
            return store.currentBulletin;
        });

        const title = ref(currentBulletin.value.title);                  // 제목
        const tempImgs = ref([]);               // 임시 이미지
        const imgs = ref([]);                   // 이미지
        const newCnt = ref(0);
       
        /* 기존의 주보 이미지 파일을 tempImg와 imgs에 저장하여 사용합니다. */
        onMounted(() => {
            tempImgs.value = currentBulletin.value.imgs;
            imgs.value = currentBulletin.value.imgs;
        });

        /* Images Select */
        const changeImageFile = (e) => {
            const files = e.target.files;

            /* 새 업로드 이미지가 있을 경우에만 */
            if (files.length > 0) {
                newCnt.value = newCnt.value + files.length;

                imgs.value = [...imgs.value, ...files ];
                
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

        const onSubmit = async () => {
            
            /* 필수 입력 검사 */
            if (title.value === "") {
                alert("필수 입력 항목을  입력해주세요!")
                return;
            }

            if (newCnt.value + imgs.value.length === 0) {
                alert("새로 업로드할 사진을 선택해주세요!")
                return;
            } 

            if (newCnt.value > 20) {
                return "사진 업로드 제한선인 20개를 초과하였습니다!"
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

            const bulletin = {
                id: currentBulletin.value.id,
                title: title.value,
                category: currentBulletin.value.category,
                belong: currentBulletin.value.belong,
                author: currentBulletin.value.author,
                imgs01: JSON.stringify(imgStore.currentImages01),
                imgs02: JSON.stringify(imgStore.currentImages02),
                createdAt: currentBulletin.value.createdAt,
            }

            /* 주보 업데이트 start */
            imgStore.toggleLoading(true, '업데이트중입니다.');

            store.updateBulletin(bulletin).then(() => {
                router.go(-2);
                /* 주보 업데이트 end */
                imgStore.toggleLoading(false);
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