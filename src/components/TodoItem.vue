<template>
  <div v-bind:class="{'is-complete':todo.completed}">
    <p>
      <input type="checkbox" v-on:change="markComplete" v-bind:checked="todo.completed" />
      {{todo.title}}
      <button>Edit</button>
      <button @click="$emit('del-todo', todo.id)">Delete</button>
    </p>
  </div>
</template>


<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;
    }
  }
};
</script>


<style scoped>
.is-complete {
  text-decoration: line-through;
}
</style>