<script setup>
import {ref} from "vue";
import {useTaskStore} from "@/stores/useTaskStore.js"
import {storeToRefs} from "pinia";

const store = useTaskStore()
const { tasks } = storeToRefs(store)

const inputTask = ref('')

</script>

<template>
  <main>
    <div class="container mx-auto bg-cream p-16 border-gray border-2 rounded-xl mt-10">
      <div class="mt-2 flex flex-col justify-center items-center">
        <h1 class="text-center font-serif p-2 font-semibold text-gray">Welcome to your list of tasks!</h1>
        <input class="mt-2 border border-cream rounded-lg p-2 text-xs" type="text" placeholder="Write your task" v-model="inputTask">
      </div>
      <div class="flex flex-col justify-center mt-3">
        <button @click="store.addToDo(tasks.item)" class="btn-primary">Add</button>
      </div>
    </div>
    <div class="text-center font-serif p-2 font-semibold" >
      <h1 class="">Total to do list: <span class="text-red-500">{{tasks.length}}</span></h1>
    </div>
    <div class="mx-auto container flex flex-col mt-3 items-center">
        <div v-for="task in tasks" :key="tasks.id" class="space-x-16">
          <input class="border border-cream rounded-lg text-xl p-2 mt-2 text-gray" type="text" :value="task">
          <button class="btn-remove self-center" @click="store.deleteTask(index)">remove</button>
      </div>
    </div>
  </main>
</template>
