<template>
    <div>

        <PageHeaderDashboard title="Dashboard"/>


        <!-- Content goes here -->
        <div v-if="isCompact">
            <div :key="id" class="flex flex-col bg-gray-200" v-for="(server, id) in this.servers">
                <div class="bg-white shadow-lg rounded-md p-5 m-2 flex items-center justify-between border-b">
                <span class="text-2xl">
                    {{ server.name }}
                    <WhiteTagComponent :server_type="server.server_type"/>
                </span>

                    <span class="float-right py-1 px-3 text-sm text-white font-semibold bg-green-500 rounded-full"
                          v-if="server.status === 'running'">{{ server.status }}</span>
                    <span class="float-right py-1 px-3 text-sm text-white font-semibold bg-red-500 rounded-full"
                          v-if="server.status === 'off'">{{ server.status }}</span>
                    <span class="float-right py-1 px-3 text-sm text-white font-semibold bg-yellow-500 rounded-full"
                          v-if="server.status === 'initializing'">{{ server.status }}</span>
                    <span class="float-right py-1 px-3 text-sm text-white font-semibold bg-yellow-500 rounded-full"
                          v-if="server.status === 'stopping'">{{ server.status }}</span>
                    <span class="float-right py-1 px-3 text-sm text-white font-semibold bg-yellow-500 rounded-full"
                          v-if="server.status === 'deleting'">{{ server.status }}</span>
                    <span class="float-right py-1 px-3 text-sm text-white font-semibold bg-yellow-500 rounded-full"
                          v-if="server.status === 'migrating'">{{ server.status }}</span>
                    <span class="float-right py-1 px-3 text-sm text-white font-semibold bg-yellow-500 rounded-full"
                          v-if="server.status === 'rebuilding'">{{ server.status }}</span>

                </div>
            </div>
        </div>

        <div v-if="!isCompact" class="block md:hidden text-center">
            <h4>Not visible on mobile.</h4>
        </div>

        <div v-if="!isCompact" class="hidden md:block">
            <div class="flex flex-col">
                <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 pb-5">
                    <div class="align-middle inline-block min-w-full shadow-lg overflow-hidden sm:rounded-lg border-b border-gray-200">
                        <table class="min-w-full">
                            <thead>
                            <tr>
                                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>
                                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    Server Type
                                </th>
                                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    Locked
                                </th>
                                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    Traffic
                                </th>
                                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    Backup?
                                </th>
                            </tr>
                            </thead>
                            <tbody class="bg-white">
                            <tr v-for="(server, id) in this.servers" :key="id">
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div class="flex items-center">
                                        <div class="ml-4">
                                            <div class="text-sm leading-5 font-medium text-gray-900">{{ server.name}}</div>
                                            <div class="text-sm leading-5 text-gray-500">Ubuntu 16.04 Standard 64 bit</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div class="text-sm leading-5 text-gray-900">{{ server.server_type }}</div>
                                    <div class="text-sm leading-5 text-gray-500">fsn1-dc8</div>
                                </td>
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                {{ server.status }}
                              </span>
                                </td>
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                                    locked
                                </td>
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                                    23 GB / 20 TB
                                </td>
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                                    Yes
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import WhiteTagComponent from "@/components/tags/ServerTypeTag";
    import PageHeaderDashboard from "@/components/PageHeaders/PageHeaderViewSwitcher";
    import {mapGetters} from "vuex";

    export default {
        name: "Index",
        components: {PageHeaderDashboard, WhiteTagComponent},
        computed: {
            ...mapGetters('application', [
                'isCompact'
            ])
        },
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