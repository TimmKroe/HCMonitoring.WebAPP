<template>
    <div class="lg:flex lg:items-center lg:justify-between mb-4">
        <div class="flex-1 min-w-0">
            <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate pb-2">
                {{ this.title }}
            </h2>
        </div>

        <span class="sm:ml-3" v-if="this.status">
                <RuningStatusTag :status="this.status" class="align-middle" v-if="this.status === 'running'"/>
                <RuningStatusTag :status="this.status" class="align-middle" v-if="this.status === 'starting'"/>
                <ProblemsStatusTag :status="this.status" class="align-middle" v-if="this.status === 'initializing'"/>
                <ProblemsStatusTag :status="this.status" class="align-middle" v-if="this.status === 'migrating'"/>
                <ProblemsStatusTag :status="this.status" class="align-middle" v-if="this.status === 'rebuilding'"/>
                <DownStatusTag :status="this.status" class="align-middle" v-if="this.status === 'stopping'"/>
                <DownStatusTag :status="this.status" class="align-middle" v-if="this.status === 'off'"/>
                <DownStatusTag :status="this.status" class="align-middle" v-if="this.status === 'deleting'"/>
                <DownStatusTag :status="this.status" class="align-middle" v-if="this.status === 'unknown'"/>
        </span>
    </div>
</template>

<script>
    import RuningStatusTag from "@/components/tags/serverstatus/RuningStatusTag";
    import ProblemsStatusTag from "@/components/tags/serverstatus/ProblemsStatusTag";
    import DownStatusTag from "@/components/tags/serverstatus/DownStatusTag";

    export default {
        name: "PageHeaderStatus",
        components: {DownStatusTag, ProblemsStatusTag, RuningStatusTag},
        props: ["title", "status"]
    }
</script>

<style scoped>

</style>