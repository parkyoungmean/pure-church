<template>
    <div class="mx-auto w-full xl:max-w-7xl 2xl:max-w-[1640px] 5xl:max-w-[1920px] px-3 sm:px-6 md:px-8 md:px-12 bg-gray-200">
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
            <div class="max-w-3xl xl:max-w-6xl 5xl:max-w-[1640px] mx-auto overflow-hidden rounded-md bg-white shadow">
                <div class="grid grid-cols-2">
                    <div class="relative col-span-1 hidden md:block">
                        <div class="absolute inset-0 bg-gray-800/10"></div>
                        <img src="https://imgur.com/bfj4HiU.jpg" alt="" class="h-full w-full object-cover">
                    </div>
                    <div class="col-span-2 md:col-span-1 p-8">
                        <div class="flex flex-col justify-center h-ful">
                            <h2 class="mb-2 text-xl font-bold uppercase tracking-tight text-gray-600">회원가입</h2>
                            <!-- SIGNUP FORM -->
                            <form @submit.prevent="onSubmit" class="w-full space-y-4">
                                <div class="space-y-2">
                                    <!-- Email -->
                                    <div class="email relative flex w-full flex-wrap items-stretch mb-3">
                                        <label for="email-address" class="sr-only">이메일 주소</label>
                                        <span class="z-10 h-full leading-sung font-normal absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3 text-gray-400"><i class="fas fa-envelope"></i></span>
                                        <input type="email" v-model.trim="formData.email" id="email-address" name="email" class="block w-full rounded-md border border-gray-300 border-2 relative px-3 py-3 placeholder-gray-400 text-gray-700 text-sm pl-10 w-full outline-none focus:border-purple-500" placeholder="이메일 주소">

                                        <!-- Error Message -->
                                        <span v-for="error in v$.email.$errors" :key="error.$uid" class="text-red-500"> 
                                            <!-- Value is required -->
                                            <p v-if="error.$message=='Value is required'" class="flex items-center justify-between text-red-500 shadow-inner rounded p-0 gap-1 text-sm md:text-md">
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
                                            <!-- Value is not a valid email address -->
                                            <p v-if="error.$message=='Value is not a valid email address'" class="flex items-center justify-between text-red-500 shadow-inner rounded p-0 gap-1 text-sm md:text-md">
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
                                                잘못된 이메일 양식입니다.
                                            </p>
                                        </span>
                                    </div>
                                    <!-- Name -->
                                    <div class="name relative flex w-full flex-wrap items-stretch mb-3">
                                        <label for="name" class="sr-only">이름</label>
                                        <span class="z-10 h-full leading-sung font-normal absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3 text-gray-400"><i class="fas fa-user"></i></span>
                                        <input type="name" v-model.trim="formData.name" id="name" name="name" class="block w-full rounded-md border border-gray-300 border-2 relative px-3 py-3 placeholder-gray-400 text-gray-700 text-sm pl-10 w-full outline-none focus:border-purple-500" placeholder="이름">
                                        <!-- Error Message -->
                                        <span v-for="error in v$.name.$errors" :key="error.$uid" class="text-red-500"> 
                                            <!-- Value is required -->
                                            <p v-if="error.$message=='Value is required'" class="flex items-center justify-between text-red-500 shadow-inner rounded p-0 gap-1 text-sm md:text-md">
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
                                                이름을 입력해주세요.
                                            </p>
                                        </span>
                                    </div>
                                    <!-- Password -->
                                    <div class="password relative flex w-full flex-wrap items-stretch mb-3">
                                        <label for="password" class="sr-only">비밀번호</label>
                                        <span class="z-10 h-full leading-sung font-normal absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3 text-gray-400"><i class="fas fa-lock"></i></span>
                                        <input :type="showPassword01 ? 'text' : 'password'" v-model.trim="formData.password" id="password" name="password" class="block w-full rounded-md border border-gray-300 border-2 relative px-3 py-3 placeholder-gray-400 text-gray-700 text-sm pl-10 w-full outline-none focus:border-purple-500" placeholder="비밀번호">
                                        <span @click="showPassword01 = !showPassword01" class="z-10 h-full leading-sung font-normal absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3 text-gray-400"><i :class="showPassword01 ? 'fas fa-eye-slash' : 'fas fa-eye'"></i></span>

                                        <!-- Error Message -->
                                        <span v-for="error in v$.password.$errors" :key="error.$uid" class="text-red-500">
                                             <!-- Value is required -->
                                             <p v-if="error.$message=='Value is required'" class="flex items-center justify-between text-red-500 shadow-inner rounded p-0 gap-1 text-sm md:text-md">
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
                                            <!-- This field should be at least 6 characters long -->
                                            <p v-if="error.$message=='This field should be at least 6 characters long'" class="flex items-center justify-between text-red-500 shadow-inner rounded p-0 gap-1 text-sm md:text-md">
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
                                                비밀번호는 최소 6글자 이상이어야 합니다.
                                            </p>
                                            <!-- The password requires an uppercase, lowercase, number and special character -->
                                            <p v-if="error.$message=='The password requires an uppercase, lowercase, number and special character'" class="flex items-center justify-between text-red-500 shadow-inner rounded p-0 gap-1 text-sm md:text-md">
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
                                                비밀번호는 영어소문자, 숫자, 특수기호를 조합해서 사용하세요.
                                            </p>
                                        </span>
                                    </div>
                                    <!-- Password Check-->
                                    <div class="password-check relative flex w-full flex-wrap items-stretch mb-3">
                                        <label for="password-check" class="sr-only">비밀번호 확인</label>
                                        <span class="z-10 h-full leading-sung font-normal absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3 text-gray-400"><i class="fas fa-lock"></i></span>
                                        <input :type="showPassword02 ? 'text' : 'password'" v-model.trim="formData.passwordCheck" id="password-check" name="password-check" class="block w-full rounded-md border border-gray-300 border-2 relative px-3 py-3 placeholder-gray-400 text-gray-700 text-sm pl-10 w-full outline-none focus:border-purple-500" placeholder="비밀번호 확인">
                                        <span @click="showPassword02 = !showPassword02" class="z-10 h-full leading-sung font-normal absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3 text-gray-400"><i :class="showPassword02 ? 'fas fa-eye-slash' : 'fas fa-eye'"></i></span>



                                        <!-- Error Message -->
                                        <span v-for="error in v$.passwordCheck.$errors" :key="error.$uid" class="text-red-500"> 
                                            <!-- Value is required -->
                                            <p v-if="error.$message=='Value is required'" class="flex items-center justify-between text-red-500 shadow-inner rounded p-0 gap-1 text-sm md:text-md">
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
                                                비밀번호확인을 입력해주세요.
                                            </p>
                                             <!-- This field should be at least 6 characters long -->
                                            <p v-if="error.$message=='This field should be at least 6 characters long'" class="flex items-center justify-between text-red-500 shadow-inner rounded p-0 gap-1 text-sm md:text-md">
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
                                                비밀번호는 최소 6글자 이상이어야 합니다.
                                            </p>
                                            <!-- The value must be equal to the other value -->
                                            <p v-if="error.$message=='The value must be equal to the other value'" class="flex items-center justify-between text-red-500 shadow-inner rounded p-0 gap-1 text-sm md:text-md">
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
                                                비밀번호가 일치하지 않습니다.
                                            </p>
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <button class="w-full rounded-md bg-blue-500 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">회원가입하기</button>
                                </div>
                                <div class="text-center underline">
                                    <router-link to="/login" class="text-sm fot-medium text-blue-600 hover:text-blue-500">
                                    로그인
                                    </router-link>
                                </div>
                            </form>
                            <!-- END OF SIGNUP FORM -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import router from '@/router';
import { computed, reactive, ref } from 'vue'
import { useStore } from "vuex";
import { useAuthStore } from "../../stores/authentications";
import useVuelidate from "@vuelidate/core";
import { required, minLength, email, sameAs, helpers } from "@vuelidate/validators";

export default {
    setup () {
        const store = useStore();
        const authStore = useAuthStore();

        const valid = ref(false);
        const error = ref(false);
        const success = ref(false);
        const showPassword01 = ref(false);
        const showPassword02 = ref(false);

        const formData = reactive({
            email: '',
            name: '',
            password: '',
            passwordCheck: '',
        })

        const rules = computed(() => {
            return {
                email: { required, email },
                name: { required },
                password: { 
                    required, minLength: minLength(6),
                    containsPasswordRequirement: helpers.withMessage(
                    () => `The password requires an uppercase, lowercase, number and special character`, 
                    (value) => /(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/.test(value)
                    ),
                },
                passwordCheck: { required, minLength: minLength(6), sameAs: sameAs(formData.password) }, 
            }
        });

        const v$ = useVuelidate(rules, formData)

        const invalidEmail = computed(() => {
            return formData.email === ''
        })

        const invalidName = computed(() => {
            return formData.name === ''
        })

        const invalidPassword = computed(() => {
            return formData.password === ''
        })

        const invalidPasswordCheck = computed(() => {
            return formData.passwordCheck === ''
        })

        const onSubmit = async () => {
            const result = await v$.value.$validate();

            if (result) {
                authStore.signup(formData)
                .then(() => {
                    if (authStore.signupSuccess) {
                        router.replace("/");
                    }
                })
            }
        }

        return {
            valid,
            error,
            success,
            formData,
            v$,
            rules,
            required,
            showPassword01,
            showPassword02,
            invalidEmail,
            invalidName,
            invalidPassword,
            invalidPasswordCheck,
            onSubmit,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>