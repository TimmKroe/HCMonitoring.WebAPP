<template>
    <div>

        <PageHeader title="About"/>

        <div class="bg-white shadow-lg p-6 rounded-md">
            <div class="pb-4">
                <h3 class="text-2xl border-b font-semibold">Description</h3>
                <div class="pl-2">
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                        sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet.</p>
                </div>
            </div>

            <div class="pb-4">
                <h3 class="text-2xl border-b font-semibold">Open Source Licenses</h3>
                <ul class="list-disc list-inside pl-5">
                    <li><a href="#" class="text-blue-500 hover:text-blue-700">Vue.js</a></li>
                    <li><a href="#" class="text-blue-500 hover:text-blue-700">Vue Router</a></li>
                    <li><a href="#" class="text-blue-500 hover:text-blue-700">Axios</a></li>
                </ul>
            </div>

            <div class="pb-4">
                <h3 class="text-2xl border-b font-semibold">Software License</h3>
                <div class="pl-2">
                    <p>WebAPI (Backend) is licensed under GPL-3.0 as well as the WebAPP (Frontend) which is licensed under GPL-3.0.</p>
                </div>
            </div>

            <div class="flex md:flex-row flex-col">
                <div class="pb-4 pr-4 w-full">
                    <h3 class="text-2xl border-b font-semibold">Statistics / Performance / System</h3>
                    <div class="pl-2">
                        TODO
                    </div>
                </div>
                <div class="pb-4 w-full">
                    <h3 class="text-2xl border-b font-semibold">Version</h3>
                    <div class="pl-2">
                        <p class=""><span class="font-bold">Installed:</span> 2020.2-DEV &nbsp; - &nbsp; <a href="#" class="text-blue-500 hover:text-blue-700">How to update.</a></p>
                        <p class=""><span class="font-bold">Latest Stable:</span> 2020.2.1</p>
                        <p class=""><span class="font-bold">Latest Experimental:</span> 2020.2.1</p>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    import PageHeader from "@/components/PageHeaders/PageHeaderText";

    export default {
        name: "About",
        components: {PageHeader}
    }
</script>

<style scoped>

</style>