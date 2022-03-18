const app = new Vue (
    {
        el: '#app',
        data: {
            todoList: [],

            nuovoContenutoTodo: "",
        },

        

        methods: {
            aggiungiTodoItem (contenutoTodo) {
                if (contenutoTodo.trim() !== "") {
                    this.todoList.push(contenutoTodo.trim());
                    this.nuovoContenutoTodo = "";
                } else {
                    console.warn('Il pc sta per esplodere perché non puoi aggiungere questo Item!!!!!!')
                }
            },

            rimuoviTodoItem (indiceTodo) {
                if(this.todoList[indiceTodo] !== undefined){
                    /* Rimuove un elemento all'indice todoIndice */
                    this.todoList.splice(indiceTodo, 1);
                }  else {
                    console.warn('Il pc sta per esplodere perché non puoi rimuovere questo Item dato che non è presente nella todoList!!!!!!')
                }
            },
        }
    });