<script setup>
import {ref} from "vue";
import {useTaskStore} from "@/stores/useTaskStore.js"

const store = useTaskStore()

const inputTask = ref('')

const addTask = () => {
  if (inputTask.value.length > 0) {
    store.addToDo(inputTask.value)
    inputTask.value = ''
  }
}

</script>

<template>
  <main class="animate-in fade-in zoom-in duration-500 h-screen flex flex-col items-center justify-center">
    <div class="flex justify-center mt-10">
      <h1 class="text-4xl font-serif">Welcome to ToDo List!</h1>
    </div>
    <div class="mx-auto flex w-full max-w-md items-center justify-center mt-4">
      <div
        class="relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-xl border-2 bg-[#fff9de] p-0.5"
      >
        <div
          class="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#69665c_20deg,transparent_120deg)]"
        ></div>
        <div class="relative z-20 flex w-full rounded-[0.60rem] bg-[#fff9de] p-1">
          <input
            type="text"
            v-model="inputTask"
            class="mr-2 inline-block h-full font-serif flex-1 rounded-lg px-2 py-4 text-[#69665c] text-xs placeholder:text-[#69665c]/40 focus:outline-none focus:ring-1 focus:ring-gray"
            placeholder="write your task..."
          />

          <button @click="addTask()" class="btn-primary">Add</button>
        </div>
      </div>
    </div>
    <div class="text-center font-serif p-2 font-semibold">

      <h1 class="">Total to do list: <span class="text-red-500">{{ store.tasks.length }}</span></h1>
    </div>
    <div v-if="store.tasks.length > 0" class="animate-in slide-in-from-top duration-300 mx-auto container flex flex-col mt-3 items-center">
      <ul v-auto-animate class="w-full bg-[#fff9de] rounded-md shadow max-w-md px-4 py-2 border-[#69665c] border-2 divide-y">
        <li v-for="task in store.tasks" :key="task.id" class="flex items-center justify-between w-full py-4">
          <p class="font-semibold leading-5">{{ task.name }}</p>
          <button class="btn-remove self-center" @click="store.deleteTask(task.id)">Remove</button>
        </li>
      </ul>
    </div>
  </main>
</template>
