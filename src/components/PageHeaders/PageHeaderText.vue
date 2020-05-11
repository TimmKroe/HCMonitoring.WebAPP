<template>
    <div class="lg:flex lg:items-center lg:justify-between mb-4">
        <div class="flex-1 min-w-0">
            <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate pb-2">
                {{ this.title }}
            </h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PageHeaderText",
        props: ["title"]
    }
</script>

<style scoped>

</style>