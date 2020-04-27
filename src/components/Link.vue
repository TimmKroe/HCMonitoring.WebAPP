<template>
    <div>
        <a :href="this.link" class="text-blue-500 hover:text-blue-700">{{ this.text }}</a>
    </div>
</template>

<script>
    export default {
        name: "Link",
        props: ["link", "text"]
    }
</script>

<style scoped>

</style>