

<template>
    <div >
        <nav class="p-6 flex items-center justify-between">
            <NuxtLink to="/" class="text-xl text-cyan-100">University Archive</NuxtLink>

            <div class="flex items-center space-x-4">
                <NuxtLink to="/" class="text-white hover:text-teal-300">Home</NuxtLink>
                <NuxtLink to="/browse" class="text-white hover:text-teal-300">Browse</NuxtLink>
            </div>
        </nav>

        <slot />
        <footer class="p-6 mb-0 flex flex-wrap items-center justify-between bg-cyan-800">
                <p class="text-gray-300">Copyright (c) 2023 - University Archive</p>

                <div class="flex mt-6 md:mt-0 items-center space-x-4">
                   
                        <NuxtLink to="/myjobs" class="py-1 px-2 bg-teal-900 hover:bg-teal-700 text-white rounded">My Archive</NuxtLink>
                        <NuxtLink to="/createjob" class="py-1 px-2 bg-teal-600 hover:bg-teal-700 text-white rounded">Create Archive</NuxtLink>
                        <NuxtLink to="/login" class="py-1 px-2 bg-rose-600 hover:bg-rose-700 text-white rounded">Log out</NuxtLink>
                    

                    
                </div>
            </footer>

            </div>
   
</template>