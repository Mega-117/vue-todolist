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
            /* removeTask(indiceDaCancellare) {
                this.taskList.splice(indiceDaCancellare, 1);
            }, */

            addToTaskList() {
                /* controllo doppioni */
                let elementoEsiste = this.taskList.find((element) => {
                    return element.toLowerCase() === this.newTaskItem.toLowerCase();
                });
                if (this.newTaskItem === "") {
                    return alert("errore: contenuto mancante");
                }
                /* se esiste mi fermo */
                if (elementoEsiste) {
                    return alert("errore: contunuto già inserito");
                } else {
                    /* altrimenti pusha nel array */
                    this.taskList.push(this.newTaskItem.trim());
                    this.newTaskItem = "";
                }
            }

        }
    });
});