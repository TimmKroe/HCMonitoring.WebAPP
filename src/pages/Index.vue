<template>
    <div>
        <div class="mb-4">
            <h2 class="text-4xl">Dashboard</h2>
        </div>


        <!-- Content goes here -->
        <div class="flex flex-col bg-gray-200" v-for="(server, id) in this.servers" :key="id">
            <div class="bg-white shadow-lg rounded-md p-5 m-2 flex items-center justify-between border-b">
                <span class="text-2xl">
                    {{ server.name }}
                    <span class="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border align-middle">{{ server.server_type }}</span>
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
    export default {
        name: "Index",
        components: {},
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