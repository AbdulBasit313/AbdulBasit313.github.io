<template>
  <div class="app">
    <Header />
    <div class="dashboard">
      <AddForm v-bind:todos="todos" />
      <TodoList v-bind:todos="todos" />
    </div>
  </div>
</template>


<script>
import Header from "./layout/Header";
import TodoList from "./TodoList";
import AddForm from "./AddForm";

export default {
  name: "Dashboard",
  components: {
    Header,
    AddForm,
    TodoList
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    }
  }
};
</script>


<style scoped>
.app {
  height: 100vh;
  background-color: rgb(240, 240, 240);
}
.dashboard {
  background-color: rgb(250, 250, 250);
  box-shadow: 0px 0px 10px grey;
  width: 460px;
  padding: 46px;
  margin: 0 auto;
  margin-top: 30px;
}
</style>
