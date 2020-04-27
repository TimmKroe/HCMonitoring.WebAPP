<template>
    <div>

        <PageHeader title="Dashboard" />


        <!-- Content goes here -->
        <div class="flex flex-col bg-gray-200" v-for="(server, id) in this.servers" :key="id">
            <div class="bg-white shadow-lg rounded-md p-5 m-2 flex items-center justify-between border-b">
                <span class="text-2xl">
                    {{ server.name }}
                    <WhiteTagComponent :server_type="server.server_type" />
                </span>

                <span v-if="server.status === 'running'" class="float-right py-1 px-3 text-sm text-white font-semibold bg-green-500 rounded-full">{{ server.status }}</span>
                <span v-if="server.status === 'off'" class="float-right py-1 px-3 text-sm text-white font-semibold bg-red-500 rounded-full">{{ server.status }}</span>
                <span v-if="server.status === 'initializing'" class="float-right py-1 px-3 text-sm text-white font-semibold bg-yellow-500 rounded-full">{{ server.status }}</span>
                <span v-if="server.status === 'stopping'" class="float-right py-1 px-3 text-sm text-white font-semibold bg-yellow-500 rounded-full">{{ server.status }}</span>
                <span v-if="server.status === 'deleting'" class="float-right py-1 px-3 text-sm text-white font-semibold bg-yellow-500 rounded-full">{{ server.status }}</span>
                <span v-if="server.status === 'migrating'" class="float-right py-1 px-3 text-sm text-white font-semibold bg-yellow-500 rounded-full">{{ server.status }}</span>
                <span v-if="server.status === 'rebuilding'" class="float-right py-1 px-3 text-sm text-white font-semibold bg-yellow-500 rounded-full">{{ server.status }}</span>
            </div>
        </div>

    </div>
</template>

<script>
    import WhiteTagComponent from "@/components/tags/ServerTypeTag";
    import PageHeader from "@/components/PageHeader";
    export default {
        name: "Index",
        components: {PageHeader, WhiteTagComponent},
        data() {
            return {
                servers: [
                    {id: 1, name: "test Server", server_type: "CPX11", status: "running"},
                    {id: 1, name: "test Server", server_type: "CPX11", status: "running"},
                    {id: 1, name: "test Server", server_type: "CPX11", status: "running"},
                    {id: 1, name: "test Server", server_type: "CPX11", status: "running"},
                    {id: 1, name: "test Server", server_type: "CPX11", status: "running"},
                ]
            }
        }
    }
</script>

<style scoped>

</style>