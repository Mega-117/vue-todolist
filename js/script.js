Vue.config.devtools = true;

window.addEventListener("DOMContentLoaded", function () {
    const vueApp = new Vue({
        el: "#app",
        data: {
            taskList: [],
            newTaskItem: ""

        },
        methods: {
            addToTaskList() {
                this.taskList.push(this.newTaskItem);
                this.newTaskItem = "";
            }
        }
    });
});