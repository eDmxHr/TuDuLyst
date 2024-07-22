<script setup >
import {ref, onMounted, computed} from "vue";

  const task = ref([])
  const inputTask = ref('')

  const addToDo = () => {
    if (inputTask.value === "") {
      return
    }
    task.value.push(inputTask.value)
 }
</script>

<template>
  <main>
    <div class="container mx-auto bg-sky-100 p-16">
      <div class="mt-2 flex flex-col justify-center items-center">
        <h1 class="text-center font-serif p-2 font-semibold text-zinc-400">Welcome to your list of tasks!</h1>
        <input class="mt-2 border border-gray-300 rounded-lg p-2 text-xs" type="text" placeholder="Write your task" v-model="inputTask">
      </div>
      <div class="mx-auto flex flex-col justify-center mt-3">
        <button @click="addToDo" class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none">Add</button>
      </div>
    </div>
    <div class="text-center font-serif p-2 font-semibold text-zinc-400" >
      <h1 class="">Total to do list: <span class="text-red-500">{{task.length}}</span></h1>
    </div>
    <div class="container mx-auto">
      <ul>
        <li class="bg-sky-100 text-zinc-500 mt-3 mb-3 text-center p-2 font-light font-sans" v-for="task in task" :key="task.id">{{task}} <span class="flex flex-col text-xs py-2 px-4 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"><button class="uppercase font-bold mt-2">remove</button></span></li>
      </ul>
    </div>
  </main>
</template>
