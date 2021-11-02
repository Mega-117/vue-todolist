Vue.config.devtools = true;

window.addEventListener("DOMContentLoaded", function () {
    const vueApp = new Vue({
        el: "#app",
        data: {
            taskList: [
                "ciao",
            ],
            newTaskItem: ""

        },
        methods: {
            addToTaskList() {
                /* controllo doppioni */
                let elementoEsiste = this.taskList.find((element) => {
                    return element.toLowerCase() === this.newTaskItem.toLowerCase();
                });
                /* se esiste mi fermo */
                if (elementoEsiste) {
                    return alert("errore");
                } else {
                    /* altrimenti pusha nel array */
                    this.taskList.push(this.newTaskItem.trim());
                    this.newTaskItem = "";
                }
            }
        }
    });
});