//var App= new Vue({
  //el: '#app' ,
  //data: {
    //message: 'To Do List' ,
    //newTodo: '' ,
    //todos: [] ,
  //},
  //methods: {
    //addTodo() {
      //this.todos.push({
        //title: this.newTodo,
        //done: false
      //});
      //this.newTodo = '';
    //},
    //removeTodo(todo) {
      //const todoIndex = this.todos.indexOf(todo);
      //this.todos.splice(todoIndex, 1);
    //},
    //allDone() {
      //this.todos.forEach(todo => {
        //todo.done = true;
      //})
    //}
  //}
//});

var todoApp = new Vue({
  el: '#todoApp',
  data: {
    addTodoInput: '',
    lists: [],
    completed: false   
  },
  methods: {
      addTask: function() {
          const date = new Date();
          const todoDate = date.toLocaleString();
          if(!this.addTodoInput){
              this.completed= true;
              this.dateCreated= todoDate
              return;
          }
          this.completed = false;

          this.lists.push({
              id: this.lists.length+1,
              title: this.addTodoInput,
              isComplete:false,
              dateCreated: todoDate

          });

          this.addTodoInput= '';
      },
      updateTask: function(e, list){
          e.preventDefault();
          list.title = e.target.innerText;
          e.target.blur();
      },
      completeTask: function(list){
          list.isComplete = !list.isComplete;
      },
      deleteTask(id){
          this.lists = this.lists.filter(todo => todo.id != id)
      }
  }
})