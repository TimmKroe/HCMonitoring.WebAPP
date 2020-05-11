<template>
    <div class="lg:flex lg:items-center lg:justify-between mb-4">
        <div class="flex-1 min-w-0">
            <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate pb-2">
                {{ this.title }}
            </h2>
        </div>

        <div class="bg-gray-200 text-sm text-gray-500 leading-none border-2 border-gray-200 rounded-full inline-flex">
            <button @click="toggleCompact" :class="isCompact ? 'active' : ''" class="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-l-full px-4 py-2" id="grid">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="fill-current w-4 h-4 mr-2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                <span>Compact</span>
            </button>
            <button @click="toggleCompact" :class="!isCompact ? 'active' : ''" class="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-r-full px-4 py-2" id="list">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="fill-current w-4 h-4 mr-2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                <span>Detailed</span>
            </button>
        </div>

    </div>
</template>

<script>
    import {mapGetters, mapMutations } from "vuex";

    export default {
        name: "PageHeaderViewSwitcher",
        props: ["title", ],
        computed: {
            ...mapGetters('application', [
                'isCompact'
            ])
        },
        methods: {
            ...mapMutations('application', [
                'toggleCompact'
            ])
        }
    }
</script>

<style scoped>
    .active {background: white; border-radius: 9999px; color: #63b3ed;}
</style>