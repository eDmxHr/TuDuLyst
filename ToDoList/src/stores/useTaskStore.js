import {defineStore} from "pinia";

export const useTaskStore = defineStore('tasks', {
    state: () => ({
        tasks: [],
        id: 0,
    }),
    actions: {
        addToDo (item){
            this.id = this.id + 1
            this.tasks.push(
              {name: item, id: this.id}
            );
        },
         deleteTask (id)  {
            this.tasks = this.tasks.filter((item) => item.id !== id);
        },
    },
})

