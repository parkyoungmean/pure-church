<template>
    <div class="min-h-screen items-center justify-center">
        <section class="header py-10 md:py-15">
            <div class="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 ">
                <h2 class="text-2xl font-semibold md:text-3xl text-center mb-10 md:mb-15">설정</h2>
                <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-7">
                    <div class="text-center px-6">
                        <div class="bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200">
                            <div class="icon-step w-1/3 bg-transparent h-20 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                </svg>
                            </div>
                            <div class="body-step w-2/3 bg-gray-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg">
                                <h2 class="font-bold text-sm">앱 설정</h2>
                                준비 중입니다.
                                <!-- <p class="text-xs text-gray-600">순전한교회 앱을 <br> 관리합니다.</p> -->
                            </div>
                        </div>
                    </div>
                    <div class="text-center px-6">
                        <div class="bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200">
                            <div class="icon-step w-1/3 bg-transparent h-20 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                                </svg>
                            </div>
                            <div class="body-step w-2/3 bg-gray-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg">
                                <h2 class="font-bold text-sm">회원 관리</h2>
                                준비 중입니다.
                                <!-- <p class="text-xs text-gray-600">가입한 회원을 <br> 관리합니다.</p> -->
                            </div>
                        </div>
                    </div>
                    <div @click="$router.push('/users')" class="text-center px-6">
                        <div class="bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200">
                            <div class="icon-step w-1/3 bg-transparent h-20 flex items-center justify-center">
                                <span style="vertical-align: middle;" class="relative material-icons mr-2 text-2xl">manage_accounts</span>
                            </div>
                            <div class="body-step w-2/3 bg-gray-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg">
                                <h2 class="font-bold text-sm">학생 관리</h2>
                                <p class="text-xs text-gray-600">순전한 학교의 학생을 <br> 관리합니다.</p>
                            </div>
                        </div>
                    </div>
                    <div @click="$router.push('/publicities')" class="text-center px-6">
                        <div class="bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200">
                            <div class="icon-step w-1/3 bg-transparent h-20 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
                                </svg>
                            </div>
                            <div class="body-step w-2/3 bg-gray-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg">
                                <h2 class="font-bold text-sm">광고 관리</h2>
                                <p class="text-xs text-gray-600">광고 슬라이드를 <br> 관리합니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>