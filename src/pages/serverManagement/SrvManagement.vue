<template>
    <div>

        <PageHeader title="Server Management"/>


        <div class="flex flex-col">
            <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 pb-5 hidden md:block">
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
                            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                        </tr>
                        </thead>
                        <tbody class="bg-white">
                                <ServerTableEntry v-for="(server, i) in 10" :key="i" :data="server"/>
                        </tbody>
                    </table>
                </div>
            </div>


            <div v-for="(backup, i) in 10" :key="i" class="md:hidden">
                <div class="bg-white shadow-lg rounded-md p-5 m-2 flex items-center justify-between border-b">
                <span class="text-2xl">
                    test
                </span>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import PageHeader from "@/components/PageHeader";
    import ServerTableEntry from "@/pages/serverManagement/ServerTableEntry";
    export default {
        name: "SrvManagement",
        components: {ServerTableEntry, PageHeader}
    }
</script>

<style scoped>

</style>