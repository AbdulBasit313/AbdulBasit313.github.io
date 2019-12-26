<template>
  <div id="app">
    <AddForm v-on:add-todo="addTodo" />
    <TodoList v-bind:todos="todos" v-on:del-todo="deleteTodo" />
  </div>
</template>


<script>
import TodoList from "./components/TodoList";
import AddForm from "./components/AddForm";

export default {
  name: "app",
  components: {
    TodoList,
    AddForm
  },
  data() {
    return {
      todos: [
        { id: 1, title: "go to gym", completed: false },
        { id: 2, title: "buy mouse", completed: true },
        { id: 3, title: "prepare for pandas exam", completed: false }
      ]
    };
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(item => item.id !== id);
    },
    addTodo(newTodo) {
      this.todos = [...this.todos, newTodo];
    }
  }
};
</script>


<style>
</style>
