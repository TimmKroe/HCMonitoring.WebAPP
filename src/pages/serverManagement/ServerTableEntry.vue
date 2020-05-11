<template>
    <tr>

        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <div class="flex items-center">
                <div class="ml-4">
                    <div class="text-sm leading-5 font-medium text-gray-900">Server Name</div>
                    <div class="text-sm leading-5 text-gray-500">Ubuntu 16.04 Standard 64 bit</div>
                </div>
            </div>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <div class="text-sm leading-5 text-gray-900">CPX11</div>
            <div class="text-sm leading-5 text-gray-500">fsn1-dc8</div>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                running
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
        <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
            <a class="text-indigo-600 hover:text-indigo-900" href="/srv-management/1">Edit</a>
        </td>
    </tr>
</template>

<script>

    export default {
        name: "ServerTableEntry",
        components: {},
        props: ["data"],
        data() {
            return {
                visible: true
            }
        },
        methods: {
            toggleModal: function()  {
                this.visible = !this.visible;
            }
        }
    }
</script>

<style scoped>

</style>