<template>
    <div class="">

        <PageHeader title="Server XYZ" :server-status-button="true" :server-status-button-status="'running'"/>

        <ServerTypeTag server_type="CPX11"/>
        <ServerTypeTag server_type="Ubuntu 18.04"/>
        <ServerTypeTag server_type="fsn1-dc9"/>

        <div class="flex md:flex-row flex-col">
            <!--General -->
            <div class="bg-white p-4  rounded-md shadow-lg md:w-2/3 m-2">
                <div class="font-semibold mb-1">
                    <h4 class="text-xl">General</h4>
                </div>
                <div>
                    <ul class="list-none pl-4 align-middle">
                        <li>
                            <p><strong>Server Type: </strong> CPX11</p>
                        </li>
                        <li>
                            <p><strong>Created: </strong> 2016-01-30T23:50:00+00:00</p>
                        </li>
                        <li>
                            <p><strong>Backup Window: </strong> 22-07</p>
                        </li>
                        <li>
                            <p><strong>Protected: </strong> true</p>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Global -->
            <div class="bg-white p-6 rounded-md shadow-lg md:w-1/3 m-2">
                <div class="font-semibold mb-1">
                    <h4 class="text-xl">Global</h4>
                </div>
                <div>
                    <ul class="list-none pl-4 align-middle">
                        <li>
                            <p><strong>Total Traffic: </strong> 20 TB</p>
                        </li>
                        <li>
                            <p><strong>Ingoing Traffic: </strong> 20 GB</p>
                        </li>
                        <li>
                            <p><strong>Outgoing Traffic: </strong> 20 GB</p>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

        <div class="flex md:flex-row flex-col">
            <!--General -->
            <div class="bg-white p-4 rounded-md shadow-lg md:w-1/2 m-2">
                <div class="font-semibold mb-1">
                    <h4 class="text-xl">Network</h4>
                </div>
                <div>
                    <ul class="list-none pl-4 align-middle">
                        <li>
                            <p><strong>IPv4 (public): </strong> 1.1.1.1</p>
                        </li>
                        <li>
                            <p><strong>IPv4 DNS PTR Record (public): </strong> 1.1.1.1</p>
                        </li>
                        <li>
                            <p><strong>IPv6 (public): </strong> 1.1.1.1</p>
                        </li>
                        <li>
                            <p><strong>IPv6 DNS PTR Record (public): </strong> 1.1.1.1</p>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Global -->
            <div class="bg-white p-6 rounded-md shadow-lg md:w-1/2 m-2">
                <div class="font-semibold mb-1">
                    <h4 class="text-xl">Datacenter</h4>
                </div>
                <div>
                    <ul class="list-none pl-4 align-middle">
                        <li>
                            <p><strong>Name: </strong> fsn1-dc8</p>
                        </li>
                        <li>
                            <p><strong>Description: </strong> Falkenstein 1 DC 8</p>
                        </li>
                        <li>
                            <p><strong>Network Zone: </strong> eu-central</p>
                        </li>
                        <li>
                            <p><strong>Location: </strong> Falkenstein, DE</p>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

        <div class="flex md:flex-row flex-col">
            <!--Backups -->
            <div class="bg-white p-4 rounded-md shadow-lg md:w-1/2 m-2">
                <div class="font-semibold mb-1">
                    <h4 class="text-xl">Backups</h4>
                </div>
                <div class="h-64 overflow-auto">
                    <ul class="list-none pl-4 align-middle">
                        <li v-for="(item, i) in 10" :key="i">
                            <p><Link :link="'/backups/id'" :text="'Backup 2020-04-20T14:06:37.011932+00:00'" /></p>
                        </li>
                    </ul>
                </div>
            </div>

            <!--Snapshots -->
            <div class="bg-white p-4 rounded-md shadow-lg md:w-1/2 m-2">
                <div class="font-semibold mb-1">
                    <h4 class="text-xl">Snapshots</h4>
                </div>
                <div class="h-64 overflow-auto">
                    <ul class="list-none pl-4 align-middle">
                        <li v-for="(item, i) in 10" :key="i">
                            <p><Link :link="'/snapshots/id'" :text="'Backup 2020-04-20T14:06:37.011932+00:00'" /></p>
                        </li>
                    </ul>
                </div>
            </div>

        </div>


    </div>
</template>

<script>
    import PageHeader from "@/components/PageHeader";
    import ServerTypeTag from "@/components/tags/ServerTypeTag";
    import Link from "@/components/Link";

    export default {
        name: "SingleServerMonitoring",
        components: {ServerTypeTag, PageHeader, Link}
    }
</script>

<style scoped>

</style>