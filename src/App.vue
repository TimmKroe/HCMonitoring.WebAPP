<template>
    <div>


        <div class="md:flex flex-col md:flex-row md:min-h-screen w-full">
            <!-- Sidebar -->
            <SidebarNavigation/>
            <!-- Content -->
            <div class="flex flex-col bg-gray-200 w-full md:ml-64">
                <div class="absolute flex flex-row p-2 font-bold">
                    <div class="inline-block">
                        <span class="px-2 align-middle">Org XYZ</span>
                    </div>
                </div>

                <div class="absolute xl:top-0 right-0 p-2 flex flex-row font-bold">

                    <div v-if="Authenticated">
                        <div class="inline-block">
                            <img class="rounded-full w-10 align-middle" src="https://files.timmkroe.de/dreams.png" alt="profile-pic">
                        </div>
                        <div class="inline-block py-1">
                            <span class="px-2 align-middle">Username</span>
                        </div>
                    </div>
                    <div v-if="!Authenticated">
                        <div class="inline-block py-1">
                            <span class="px-2 align-middle">
                                <a href="/login" class="inline-block">Login</a>
                            </span>
                        </div>
                    </div>


                </div>

                <div class="absolute bottom-0 right-0">
                    <div v-for="(alert, i) in this.notifications" :key="i" class="w-full pr-2">
                        <Alert :title="alert.title" :status="alert.status" :statustype="alert.statustype" :msg="alert.msg"/>
                    </div>
                </div>


                <div class="container mx-auto mt-20 md:p-10">

                    <router-view>

                    </router-view>

                    <Footer/>

                </div>
            </div>
        </div>


    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex';
    import Footer from "@/components/Footer";
    import Alert from "@/components/alerts/Alert";
    import SidebarNavigation from "@/components/SidebarNavigation";

    export default {
        name: 'App',
        components: {SidebarNavigation, Alert, Footer},
        computed: {
            ...mapState({
                Authenticated: state => state.application.authenticated
            }),

            ...mapGetters('application', [
                'Authenticated'
            ])
        },
        created () {
            this.$store.dispatch('application/getAuthenticated')
        },
        data() {
            return {
                open: false,
                notifications: [
                    {title: 'Successfully updated', statustype: 'success', msg: 'The site was successfully reloaded'},
                    {title: 'Successfully updated', statustype: 'danger', msg: 'The site was successfully reloaded'},
                    {title: 'Successfully updated', statustype: 'warning', msg: 'The site was successfully reloaded'},
                ]
            }
        },
        methods: {
            toggleNav() {
                this.open = !this.open;
            },
        }
    }
</script>

<style>
.center {
    left: 50%;
    transform: translate(-50%);
}
</style>
