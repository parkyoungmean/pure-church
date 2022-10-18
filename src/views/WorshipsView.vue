<template>
    <div class="min-h-screen items-center justify-center">
        <section class="header py-10 md:py-15">
            <div class="m-auto sm:w-full md:max-w-5xl xl:max-w-6xl 2xl:min-w-[1100px] 3xl:max-w-[1250px] 4xl:max-w-[1200px] 5xl:max-w-[1300px] 6xl:max-w-[1500px] 7xl:max-w-[1500px] 8xl:max-w-[1600px]">
                <WorshipIntroduction />
            </div>
            <div class="mx-auto px-6 sm:px-8 md:px-12 sm:w-full md:max-w-5xl xl:max-w-6xl 2xl:min-w-[1100px] 3xl:max-w-[1250px] 4xl:max-w-[1200px] 5xl:max-w-[1300px] 6xl:max-w-[1500px] 7xl:max-w-[1500px] 8xl:max-w-[1600px]">
                <h2 class="text-2xl font-semibold md:text-3xl text-center">최근 예배 목록</h2>
                <!-- Group -->
                <div class="space-y-2">
                    <!-- Sunday Worship Card List -->
                    <div class="">
                        <div class="flex items-center justify-between">
                            <!-- Title, Button -->
                            <h2 class="font-semibold text-rose-600 text-md md:text-lg 3xl:text-xl">❏ 주일 예배</h2>
                            <button class="relative w-15 h-5 xl:w-20 xl:h-7 inline-flex items-center justify-center px-2 py-1 overflow-hidden text-sm font-medium text-rose-600 border-2 border-rose-600 rounded-full hover:text-white group hover:bg-gray-50">
                                <span class="absolute left-0 block w-full h-0 transition-all bg-rose-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                <span class="absolute right-0 flex items-center justify-start w-3 h-3 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span class="relative text-center text-[0.5rem] xl:text-sm"><router-link :to="{name: 'allworships'}">전체 보기</router-link></span>
                            </button>
                        </div>
                    </div>
                    <WorshipCardList :pid="spid" />
                    <!-- End Of Worship Card List -->
                    <!-- Thursday Worship Card List -->
                    <div class="">
                        <div class="flex items-center justify-between py-2">
                            <!-- Title, Button -->
                            <h2 class="font-semibold text-fuchsia-600 text-md md:text-lg 3xl:text-xl">❏ 목요 예배</h2>
                            <button class="relative w-15 h-5 xl:w-20 xl:h-7 inline-flex items-center justify-center px-2 py-1 overflow-hidden text-sm font-medium text-fuchsia-600 border-2 border-fuchsia-600 rounded-full hover:text-white group hover:bg-gray-50">
                                <span class="absolute left-0 block w-full h-0 transition-all bg-fuchsia-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                <span class="absolute right-0 flex items-center justify-start w-3 h-3 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span class="relative text-center text-[0.5rem] xl:text-sm"><router-link :to="{name: 'allworships'}">전체 보기</router-link></span>
                            </button>
                        </div>
                    </div>
                    <WorshipCardList :pid="tpid" />
                    <!-- End Of Thursday Worship Card List -->
                    <!-- Teenager Worship Card List -->
                    <div class="">
                        <div class="flex items-center justify-between py-2">
                            <!-- Title, Button -->
                            <h2 class="font-semibold text-green-600 text-md md:text-lg 3xl:text-xl">❏ 청소년 주일 예배</h2>
                            <button class="relative w-15 h-5 xl:w-20 xl:h-7 inline-flex items-center justify-center px-2 py-1 overflow-hidden text-sm font-medium text-green-600 border-2 border-green-600 rounded-full hover:text-white group hover:bg-gray-50">
                                <span class="absolute left-0 block w-full h-0 transition-all bg-green-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                <span class="absolute right-0 flex items-center justify-start w-3 h-3 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span class="relative text-center text-[0.5rem] xl:text-sm"><router-link :to="{name: 'allworships'}">전체 보기</router-link></span>
                            </button>
                        </div>
                    </div>
                    <WorshipCardList :pid="teenager_pid" />
                    <!-- End Of Teenager Worship Card List -->
                    <!-- Friend Worship Card List -->
                    <div class="">
                        <div class="flex items-center justify-between py-2">
                            <!-- Title, Button -->
                            <h2 class="font-semibold text-[#F8CF0A] text-md md:text-lg 3xl:text-xl">❏ 프렌드 어린이 예배</h2>
                            <button class="relative w-15 h-5 xl:w-20 xl:h-7 inline-flex items-center justify-center px-2 py-1 overflow-hidden text-sm font-medium text-[#F8CF0A] border-2 border-[#F8CF0A] rounded-full hover:text-white group hover:bg-gray-50">
                                <span class="absolute left-0 block w-full h-0 transition-all bg-[#F8CF0A] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                <span class="absolute right-0 flex items-center justify-start w-3 h-3 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span class="relative text-center text-[0.5rem] xl:text-sm"><router-link :to="{name: 'allworships'}">전체 보기</router-link></span>
                            </button>
                        </div>
                    </div>
                    <WorshipCardList :pid="friend_pid" />
                    <!-- End Of Friend Worship Card List -->
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import WorshipIntroduction from '@/components/worship/WorshipIntroduction.vue';
import WorshipCardList from "@/components/worship/WorshipCardList.vue"

export default {
    components: {
        WorshipIntroduction,
        WorshipCardList,
    },
    setup () {

        /* 주일 예배 플레이리스트 id */
        const spid = 'PL13DkA-MmUMtDgdl9Gz_lU5iJ5lWPBEM-';

        /* 목요 예배 플레이리스트 id */
        const tpid = 'PL13DkA-MmUMucJ-IKlGndvVmnN9wYKl7_';
        
        /* 청소년 예배 플레이리스트 id */
        const teenager_pid = 'PL13DkA-MmUMsnKR6z_yJlhPYtHlgWG1uF';
        
        /* 프렌드 어린이 예배 플레이리스트 id */
        const friend_pid = 'PL13DkA-MmUMt1JP_r1sH_lnrZ0JpZl8GF';
        
        return {            
            spid,
            tpid,
            teenager_pid,
            friend_pid,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>