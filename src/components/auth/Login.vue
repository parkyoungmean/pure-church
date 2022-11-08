<template>
    <div class="mx-auto w-full xl:max-w-7xl 2xl:max-w-[1640px] px-3 sm:px-6 md:px-8 md:px-12 bg-gray-200">
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
        <div class="flex min-h-screen items-center justify-center py-6 sm:py-12">
            <div class="max-w-3xl mx-auto overflow-hidden rounded-md bg-white shadow">
                <div class="grid grid-cols-2">
                    <div class="relative col-span-1 hidden md:block">
                        <div class="absolute inset-0 bg-gray-800/30"></div>
                        <img src="https://i.imgur.com/X9C48XN.jpg" alt="" class="h-full w-full object-cover">
                    </div>
                    <div class="col-span-2 md:col-span-1 p-8">
                        <div class="flex flex-col justify-center h-ful">
                            <h2 class="mb-2 text-xl font-bold uppercase tracking-tight text-gray-600">로그인</h2>
                            <!-- LOGIN FORM -->
                            <form @submit.prevent="onSubmit" class="w-full space-y-4">
                                <div class="space-y-2">
                                    <!-- Email -->
                                    <div class="email relative flex w-full flex-wrap items-stretch mb-3">
                                        <label for="email-address" class="sr-only">이메일 주소</label>
                                        <span class="z-10 h-full leading-sung font-normal absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3 text-gray-400"><i class="fas fa-envelope"></i></span>
                                        <input type="email" v-model.trim="email" id="email-address" name="email" class="block w-full rounded-md border border-gray-300 border-2 relative px-3 py-3 placeholder-gray-400 text-gray-700 text-sm pl-10 w-full outline-none focus:border-purple-500" placeholder="이메일 주소">
                                        <p v-if="error && invalidEmail" class="flex items-center justify-between text-red-500 shadow-inner rounded p-0 gap-1 text-sm md:text-md">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="w-4 h-4 md:h-5 md:w-5"
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
                                            이메일을 입력해주세요.
                                        </p>
                                    </div>
                                    <!-- Password -->
                                    <div class="password relative flex w-full flex-wrap items-stretch mb-3">
                                        <label for="password" class="sr-only">비밀번호</label>
                                        <span class="z-10 h-full leading-sung font-normal absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3 text-gray-400"><i class="fas fa-lock"></i></span>
                                        <input :type="showPassword ? 'text' : 'password'" v-model.trim="password" id="password" name="password" class="block w-full rounded-md border border-gray-300 border-2 relative px-3 py-3 placeholder-gray-400 text-gray-700 text-sm pl-10 w-full outline-none focus:border-purple-500" placeholder="비밀번호">
                                        <span @click="showPassword = !showPassword" class="z-10 h-full leading-sung font-normal absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3 text-gray-400"><i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i></span>
                                        <p v-if="error && invalidPassword" class="flex items-center justify-between text-red-500 shadow-inner rounded p-0 gap-1 text-sm md:text-md">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="w-4 h-4 md:h-5 md:w-5"
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
                                            비밀번호를 입력해주세요.
                                        </p>
                                    </div>
                                </div>
                                <div class="flex items-center">
                                    <input type="checkbox" id="remember-me" name="remember-me" class="rounded">
                                    <label for="remember-me" class="ml-2 block text-sm text-gray-700">로그인 유지</label>
                                </div>
                                <div>
                                    <button class="w-full rounded-md bg-blue-500 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">로그인하기</button>
                                </div>
                                <div>
                                    <a class="text-sm fot-medium text-blue-600 hover:text-blue-500">비밀번호를 잊어버리셨습니까?</a>
                                </div>
                            </form>
                            <!-- END OF LOGIN FORM -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useAuthStore } from "../../stores/authentications";

export default {
    setup () {
        const store = useAuthStore();

        const valid = ref(false);
        const error = ref(false);
        const success = ref(false);
        const email = ref('');
        const password = ref('');
        const showPassword = ref(false);
        
        const invalidEmail = computed(() => {
            return email.value === ''
        })

        const invalidPassword = computed(() => {
            return password.value === ''
        })

        const onSubmit = async () => {
            
            /* 필수 입력 검사 */
            if (email.value === '') {
                alert("이메일을 입력해주세요!")
                error.value = true;
                return;
            }

            if (password.value === '') {
                alert("비밀번호를 입력해주세요!")
                error.value = true;
                return;
            }

            const admin = {
                email: email.value,
                password: password.value,
            }

            store.login(admin).then(() => {

            });
        }
        
        return {
            valid,
            error,
            success,
            email,
            password,
            showPassword,
            invalidEmail,
            invalidPassword,
            onSubmit,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>