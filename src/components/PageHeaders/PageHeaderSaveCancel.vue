<template>
    <div class="lg:flex lg:items-center lg:justify-between mb-4">
        <div class="flex-1 min-w-0">
            <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate pb-2">
                {{ this.title }}
            </h2>
        </div>

        <span class="hidden sm:block shadow-sm rounded-md">
            <button class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out"
                    type="button">
            <svg class="-ml-1 mr-2 h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path
                    d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/>
            </svg>
            Cancel
            </button>
        </span>

        <span class="sm:ml-3 shadow-sm rounded-md">
            <button class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out"
                    type="button">
                <svg class="-ml-1 mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path clip-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          fill-rule="evenodd"/>
                </svg>
                Save
            </button>
        </span>

    </div>
</template>

<script>
    export default {
        name: "PageHeaderSaveCancel",
        props: ["title"]
    }
</script>

<style scoped>

</style>