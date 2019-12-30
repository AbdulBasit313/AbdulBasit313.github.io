<template>
  <div>
    <h6 class="text-center mt-3 no-todo" v-if="!(todos.length)">You don't have any todo saved!</h6>
    <div v-bind:key="todo.id" v-for="todo in todos">
      <TodoItem v-bind:todo="todo" />
    </div>
  </div>
</template>


<script>
import TodoItem from "./TodoItem";

export default {
  name: "TodoList",
  props: ["todos"],
  components: {
    TodoItem
  }
};
</script>


<style scoped>
.no-todo {
  background-color: rgb(230, 230, 230);
  padding: 15px 10px;
  border-radius: 7px;
  margin: 10px 20px;
}
</style>