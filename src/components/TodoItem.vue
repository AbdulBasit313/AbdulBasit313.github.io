<template>
  <div v-bind:class="{'is-complete':todo.completed}">
    <p>
      <input type="checkbox" v-on:change="markComplete" v-bind:checked="todo.completed" />
      {{todo.title}}
      <font-awesome-icon :icon="['far', 'trash-alt']" class="icons" @click="deleteTodo(todo.id)" />
      <font-awesome-icon
        :icon="['far', 'edit']"
        class="icons"
        @click="$store.dispatch('editTodo', todo)"
      />
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
    },
    deleteTodo(id) {
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        })
        .then(result => {
          if (result.value) {
            this.$store.dispatch("delTodo", id);
            this.$swal.fire(
              "Deleted!",
              "Your todo has been deleted.",
              "success"
            );
          }
        });
    }
  }
};
</script>


<style scoped>
.is-complete {
  text-decoration: line-through;
}
.icons {
  cursor: pointer;
}
</style>