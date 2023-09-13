

<script setup>
const props = defineProps({
    my: {
        type:[Boolean]
    }
})


</script>



<template>
<div class="p-3 flex items-center justify-between ">
            <div>
                <h3 class="mb-2 text-xl font-semibold">Title</h3>
                <p class="text-gray-600">subject</p>
            </div>

<div>
                <p class="mb-2">Authour name </p>
               
            </div>

<div>
                <p>created_at_formatted</p>
            </div>

<div class="space-x-4">
                <NuxtLink class="py-4 px-6 bg-teal-700 text-white rounded">Details</NuxtLink>
                <NuxtLink  class="py-4 px-6 bg-cyan-700 text-white rounded" v-if="my">Edit</NuxtLink>
                <a class="py-4 px-6 bg-rose-700 text-white rounded"  v-if="my">Delete</a>
            </div>
        </div>



        
   </template>