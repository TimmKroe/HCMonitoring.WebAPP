<template>
    <div>


        <div class="md:flex flex-col md:flex-row md:min-h-screen w-full antialiased">
            <!-- Sidebar -->
            <SidebarNavigation/>
            <!-- Content -->
            <div class="flex flex-col bg-gray-200 w-full md:ml-64">

            <!-- <div class="absolute bottom-0 right-0">-->
            <!--    <div v-for="(alert, i) in this.notifications" :key="i" class="w-full pr-2">-->
            <!--        <Alert :title="alert.title" :status="alert.status" :statustype="alert.statustype" :msg="alert.msg"/>-->
            <!--    </div>-->
            <!--</div>-->

                <!-- Content -->
                <div class="mt-3 px-4 md:p-10">
                    <div class="min-h-footer">
                        <router-view>

                        </router-view>
                    </div>

                    <Footer/>
                </div>

            </div>
        </div>


    </div>
</template>

<script>
    import {mapGetters, mapState} from 'vuex';
    import Footer from "@/components/Footer";
    //import Alert from "@/components/alerts/Alert";
    import SidebarNavigation from "@/components/SidebarNavigation";

    export default {
        name: 'App',
        components: {SidebarNavigation, Footer},
        computed: {
            ...mapState({
                Authenticated: state => state.application.authenticated
            }),

            ...mapGetters('application', [
                'Authenticated'
            ])
        },
        created() {
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
