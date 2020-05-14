<template>
    <div>
        <PageHeaderText title="My Profile"/>

        <div class="flex flex-row">

            <div class="bg-white rounded shadow-lg m-10 w-full">

                <div class="p-10">

                    <div class="py-1">
                        <span class="px-1 text-sm text-gray-600">Username</span>
                        <input class="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none" placeholder=""
                               type="text" />
                    </div>

                    <div class="py-1">
                        <span class="px-1 text-sm text-gray-600">Email</span>
                        <input class="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none" placeholder=""
                               type="text" />
                    </div>

                </div>

            </div>

            <div class="my-10 w-64">
                <div class="bg-white rounded overflow-hidden shadow-lg">
                    <div class="text-center p-6  border-b">
                        <img
                                alt="Randy Robertson"
                                class="h-24 w-24 rounded-full mx-auto"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        />
                        <p class="pt-2 text-lg font-semibold">Username</p>
                        <p class="text-sm text-gray-600">email@email.com</p>
                    </div>
                    <div class="border-b">
                        <a class="px-4 py-2 hover:bg-gray-100 flex" href="#">
                            <div class="text-gray-800">
                                <svg
                                        class="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1"
                                        viewBox="0 0 24 24"
                                >
                                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                            </div>
                            <div class="pl-3">
                                <p class="text-sm font-medium text-gray-800 leading-none">Account settings</p>
                                <p class="text-xs text-gray-500">Usage, billing, branding, teams</p>
                            </div>
                        </a>
                        <a class="px-4 py-2 hover:bg-gray-100 flex" href="#">
                            <div class="text-gray-800">
                                <svg
                                        class="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1"
                                        viewBox="0 0 24 24"
                                >
                                    <path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <div class="pl-3">
                                <p class="text-sm font-medium text-gray-800 leading-none">Personal settings</p>
                                <p class="text-xs text-gray-500">Email, profile, notifications</p>
                            </div>
                        </a>
                        <a class="px-4 py-2 hover:bg-gray-100 flex" href="#">
                            <div class="text-green-600">
                                <svg
                                        class="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1"
                                        viewBox="0 0 24 24"
                                >
                                    <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                                </svg>
                            </div>
                            <div class="pl-3">
                                <p class="text-sm font-medium text-gray-800 leading-none">
                                    Apps &amp; integrations
                                </p>
                                <p class="text-xs text-gray-500">Google, slack, mail</p>
                            </div>
                        </a>
                    </div>

                    <div class="">
                        <a class="px-4 py-2 pb-4 hover:bg-gray-100 flex" href="#">
                            <p class="text-sm font-medium text-gray-800 leading-none">Product updates</p>
                        </a>
                        <a class="px-4 py-2 pb-4 hover:bg-gray-100 flex" href="#">
                            <p class="text-sm font-medium text-gray-800 leading-none">Status updates</p>
                        </a>
                        <a class="px-4 py-2 pb-4 hover:bg-gray-100 flex" href="#">
                            <p class="text-sm font-medium text-gray-800 leading-none">Support FAQ</p>
                        </a>
                        <a class="px-4 py-2 pb-4 hover:bg-gray-100 flex" href="#">
                            <p class="text-sm font-medium text-gray-800 leading-none">Logout</p>
                        </a>
                    </div>
                </div>
            </div>

        </div>


    </div>
</template>

<script>
    import PageHeaderText from "@/components/PageHeaders/PageHeaderText";

    export default {
        name: "Profile",
        components: {PageHeaderText}
    }
</script>

<style scoped>

</style>