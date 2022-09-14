<template>
    <div>
        <div class="p-3 mb-2">
            <!-- Images Select -->
            <div class="relative h-60 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center hover:cursor-pointer">
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
                <input multiple @change="changeImageFile" type="file" class="w-full h-full opacity-0">
            </div>
        </div>
        <!-- Image List -->
        <div v-if="tempImgs.length !== 0" class="w-full flex items-center my-2 gap-x-2" :class="tempImgs.length > 20 ? 'bg-red-300/90 text-white' : ''">
            <p class="font-medium text-xs md:text-lg">사진: {{ tempImgs.length }} 장 </p>
            <svg
                v-show="tempImgs.length > 20"
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 md:h-6 md:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
            </svg>
            <span v-if="tempImgs.length > 20" class="text-white text-xs md:text-lg bg-red-300/90">사진 업로드 제한(20개)를 초과하였습니다!!! </span>
        </div>
        <table v-if="tempImgs.length !== 0" class="w-full">
            <thead>
                <tr class="text-xs md:text-sm font-medium text-gray-700 border-b border-gray-200">
                    <td>이름</td>
                    <td>형식</td>
                    <td>삭제</td>
                </tr>
            </thead>
            <tbody v-for="(img, index) in tempImgs" :key="index" class="tex-xs md:text-sm">
                <tr :class="img.invalidMessage ? 'bg-red-300/90 text-white' : 'bg-yellow-300/60'">
                    <td class="md:py-1 text-xs md:text-sm text-center">
                        <!-- <img :src="" alt=""> -->
                        <span>{{img.name}}</span>
                    </td>
                    <td class="md:py-1 text-xs md:text-sm text-center">{{ img.type.split('/')[1] }}</td>
                    <td class="md:py-1 text-xs md:text-sm text-center">
                        <i @click.prevent="tempImgs.splice(index, 1); imgs.splice(index, 1)" class="material-icons text-red-500">delete
                        </i>
                    </td>                                        
                </tr>
                <tr class="text-center">
                    <td colspan="4" class="text-xs md:text-sm py-1 text-red-400"><span v-if="img.invalidMessage">&nbsp; - {{ img.invalidMessage }} </span> </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { ref } from "vue-demi";

export default {
    props: {
      tempImgs: {
          type: Object,
      },
      imgs: {
          type: Object,
      },
    },
    setup (props, context) {
        
        /* Images Select */
        const changeImageFile = (e) => {
            context.emit('on-change', e);
        }
        
        return {
            changeImageFile
        }
    }
}
</script>

<style lang="scss" scoped>

</style>