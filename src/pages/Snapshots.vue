<template>
    <div>
        <PageHeader title="Snapshots"/>

        <NothingLoaded/>


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
                                Size
                            </th>
                            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Source Server
                            </th>
                            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Created
                            </th>
                            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Protected?
                            </th>
                        </tr>
                        </thead>
                        <tbody class="bg-white">
                        <tr>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div class="flex items-center">
                                    <div class="ml-4">
                                        <div class="text-sm leading-5 font-medium text-gray-900">Backup 2020-04-20T14:06:37.011932+00:00</div>
                                        <div class="text-sm leading-5 text-gray-500">Ubuntu 16.04 Standard 64 bit</div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div class="text-sm leading-5 text-gray-900">1,5 GB</div>
                                <div class="text-sm leading-5 text-gray-500">240 GB Disk</div>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                running
                              </span>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                                <Link :link="'servers/1'" text="box.timmkroe.de" />
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                                2020-04-20T14:06:37+00:00
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                                Yes
                            </td>
                        </tr>
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
    import PageHeader from "@/components/PageHeaders/PageHeaderText";
    import Link from "@/components/Link";
    export default {
        name: "Backups",
        components: {PageHeader, Link},
        data() {
            return {
                snapshots: null,
            }
        }
    }
</script>

<style scoped>

</style>