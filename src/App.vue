<template>
  <div id="app">
    <AddForm v-bind:todos="todos" />
    <TodoList v-bind:todos="todos" />
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
  computed: {
    todos() {
      return this.$store.state.todos;
    }
  }
};
</script>


<style>
</style>
