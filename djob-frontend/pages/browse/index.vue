<template>
    <div class="grid md:grid-cols-4 gap-3 py-10 px-6">
        <div class="md:col-span-1 px-6 py-6 bg-teal-700 rounded">
            <div class="flex space-x-4">
                <input v-model="query" type="search" placeholder="Find a job..." class="w-full px-6 py-4 rounded-xl">

                <button class="px-6 py-4 bg-teal-900 text-white rounded-xl" v-on:click="performSearch">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
            </div>

            <hr class="my-6 opacity-30">

            <h3 class="mt-6 text-xl text-white">Categories</h3>

            <div class="mt-6 space-y-4">
               
            </div>
        </div>
    </div>

        
         
          <job/>
          <job/>
          <job/>

                    
                    
            
        
   

           
   
                    
            
  
          
    
</template>