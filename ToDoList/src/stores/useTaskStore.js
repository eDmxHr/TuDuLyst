import {defineStore} from "pinia";

export const useTaskStore = defineStore('tasks', {
    state: () => ({
        tasks: [],
        id: 0,
    }),
    actions: {
        addToDo (item){
            this.tasks.push({item, id: this.id++});
        },
         deleteTask ()  {
            this.tasks = this.tasks.filter((item) => item.id !== item.id);
        },
    },
})

