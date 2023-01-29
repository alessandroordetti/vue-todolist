const app = new Vue (
    {
        el: '#app',
        data: {
            todoList: [
                {
                    text: 'patate',
                    done: false,
                },

                {
                    text: 'prosciutto',
                    done: false,
                },

                {
                    text: 'latte',
                    done: false,
                },
            ],

            nuovoTodo: {
                text: "",
                done:"",
            },

            nuovoContenutoTodo: "",

        },

        

        methods: {
            aggiungiTodoItem (contenutoTodo) {
                if (contenutoTodo.trim() !== "") {
                    this.nuovoTodo.text=contenutoTodo;
                    this.nuovoTodo.done=true;
                    this.todoList.push(this.nuovoTodo);
                    console.log(this.nuovoTodo);
                    this.nuovoContenutoTodo = "";
                    console.log(this.todoList);
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