<template>
    <div class="py-10 px-6">
        <h1 class="mb-6 text-2xl">Create job</h1>

        <form  class="space-y-4">
            <div>
                <label >Category</label>

                <select  class="w-full mt-2 p-4 rounded-xl">
                    <option>Select category</option>
                    <option >
                        title 
                    </option>
                </select>
            </div>

            <div>
                <label>Title</label>
                <input type="text" class="w-full mt-2 p-4 rounded-xl bg-gray-100">
            </div>

            <div>
                <label>Description</label>
                <textarea  class="w-full mt-2 p-4 rounded-xl bg-gray-100"></textarea>
            </div>

            <div>
                <label>Salary</label>
                <input type="text" class="w-full mt-2 p-4 rounded-xl bg-gray-100">
            </div>

            <div>
                <label>Location</label>
                <input type="text" class="w-full mt-2 p-4 rounded-xl bg-gray-100">
            </div>

            <div>
                <label>Company name</label>
                <input type="text"  class="w-full mt-2 p-4 rounded-xl bg-gray-100">
            </div>

            <div>
                <label>Company location</label>
                <input type="text" class="w-full mt-2 p-4 rounded-xl bg-gray-100">
            </div>

            <div>
                <label>Company e-mail</label>
                <input type="text" class="w-full mt-2 p-4 rounded-xl bg-gray-100">
            </div>

            <div  class="mb-6 py-4 px-6 bg-rose-400 text-white rounded-xl">
               
            </div>

            <button class="py-4 px-6 bg-teal-700 text-white rounded-xl">Submit</button>
        </form>
    </div>
</template>