<script setup>

import {useUserStore} from  '@/stores/user'

const userStore= useUserStore()
</script>

<template>
    <div >
        <nav class="p-6 sticky top-0 flex items-center justify-between">
            <NuxtLink to="/" class="text-xl text-custom-blue">University Archive</NuxtLink>

            <div class="flex items-center space-x-4">
                <NuxtLink to="/" class="text-white hover:text-teal-300">Home</NuxtLink>
                <NuxtLink to="/browse" class="text-white hover:text-teal-300">Browse</NuxtLink>
            </div>
        </nav>

        <slot />
        <footer class="p-6 mb-0 flex flex-wrap items-center justify-between">
                <p class="text-gray-300">Copyright (c) 2023 - University Archive</p>



                <div class="flex mt-6 md:mt-0 items-center space-x-4">
                   
                         
                        <template v-if="userStore.user.isAuthenticated"><NuxtLink to="/myjobs" class="py-1 px-2 bg-teal-900 hover:bg-teal-700 text-white rounded">My Archive</NuxtLink>
                            <NuxtLink to="/createjob" class="py-1 px-2 bg-teal-600 hover:bg-teal-700 text-white rounded">Create Archive</NuxtLink>
                            <NuxtLink to="/login" class="py-1 px-2 bg-rose-600 hover:bg-rose-700 text-white rounded">Log out</NuxtLink></template>
                        
                        <template v-else><NuxtLink to="/login" class="py-1 px-2 bg-rose-600 hover:bg-rose-700 text-white rounded">Log in</NuxtLink>

                             <NuxtLink to="/signup" class="py-1 px-2 bg-rose-600 hover:bg-rose-700 text-white rounded">sign up</NuxtLink>
        
                            </template>
                        
                              </div>
            </footer>

            </div>
   
</template>