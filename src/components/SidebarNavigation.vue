<template>
    <div class="flex flex-col w-full md:w-64 text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0 shadow-lg md:fixed md:left-0 md:bottom-0 md:top-0">
        <div class="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between">
            <a class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
               href="#">HC Monitoring</a>
            <button class="rounded-lg md:hidden rounded-lg focus:outline-none focus:shadow-outline">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path @click="toggleNav" clip-rule="evenodd"
                          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                          fill-rule="evenodd"
                          v-if="!open"></path>
                    <path @click="toggleNav" clip-rule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          fill-rule="evenodd"
                          v-if="open"></path>
                </svg>
            </button>
        </div>
        <nav class="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto"
             v-if="open">
            <div class="">
                <div class="mb-2">
                    <a :class="$route.path === '/' ? 'bg-gray-200 dark-mode:bg-gray-700' : 'bg-transparent dark-mode:bg-transparent'"
                       class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                       href="/">Dashboard</a>
                    <a class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    >Servers</a>
                    <div :key="i" class="ml-6" v-for="(server, i) in 8">
                        <a :class="$router.currentRoute.path === '/servers/d' ? 'bg-gray-200 dark-mode:bg-gray-700' : 'bg-transparent dark-mode:bg-transparent'"
                           :href="'/servers/d'"
                           class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Servers</a>
                    </div>
                    <a :class="$route.path === '/backups' ? 'bg-gray-200 dark-mode:bg-gray-700' : 'bg-transparent dark-mode:bg-transparent'"
                       class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                       href="/backups">Backups</a>
                    <a :class="$route.path === '/snapshots' ? 'bg-gray-200 dark-mode:bg-gray-700' : 'bg-transparent dark-mode:bg-transparent'"
                       class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                       href="/snapshots">Snapshots</a>
                    <a :class="$route.path === '/about' ? 'bg-gray-200 dark-mode:bg-gray-700' : 'bg-transparent dark-mode:bg-transparent'"
                       class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                       href="/about">About</a>
                </div>


                <div class="border-t-2">
                    <a :class="$route.path === '/org-management' ? 'bg-gray-200 dark-mode:bg-gray-700' : 'bg-transparent dark-mode:bg-transparent'"
                       class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                       href="/org-management">ORG Management</a>
                    <a :class="$route.path === '/srv-management' ? 'bg-gray-200 dark-mode:bg-gray-700' : 'bg-transparent dark-mode:bg-transparent'"
                       class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                       href="/srv-management">SRV Management</a>
                </div>
            </div>
        </nav>
        <div class="flex-shrink-0 pl-4 pr-8 py-4 items-center  border-t-2">
            <div v-if="!Authenticated" class="flex flex-row">
                <img alt=""
                     class="h-10 w-10 rounded-full"
                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
                <div class="flex flex-col ml-4">
                    <span class="font-bold">Username</span>
                    <a class="text-sm text-gray-500" href="/profile">View Profile</a>
                </div>
            </div>
            <div v-if="Authenticated">
                <a :class="$route.path === '/login' ? 'bg-gray-200 dark-mode:bg-gray-700' : 'bg-transparent dark-mode:bg-transparent'"
                   class="block px-4 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                   href="/login">Login</a>
            </div>
        </div>

    </div>
</template>

<script>
    import {mapGetters, mapState} from "vuex";

    export default {
        name: "SidebarNavigation",
        computed: {
            ...mapState({
                Authenticated: state => state.application.authenticated
            }),

            ...mapGetters('application', [
                'Authenticated'
            ])
        },
        data() {
            return {
                open: true
            }
        },
        methods: {
            toggleNav() {
                this.open = !this.open;
            }
        }
    }
</script>

<style scoped>

</style>