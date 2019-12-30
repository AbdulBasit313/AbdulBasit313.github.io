<template>
  <div class="mb-3 mt-3 todo-card">
    <div>
      <div class="todo">{{todo.title}}</div>
    </div>
    <div>
      <font-awesome-icon
        title="Edit"
        :icon="['far', 'edit']"
        class="icons"
        @click="$store.dispatch('editTodo', todo)"
      />
      <font-awesome-icon
        title="Delete"
        :icon="['far', 'trash-alt']"
        class="icons"
        @click="deleteTodo(todo.id)"
      />
    </div>
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
.todo {
  font-size: 16;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  letter-spacing: 1px;
  font-weight: lighter;
}

.todo-card {
  background-color: rgb(230, 230, 230);
  padding: 20px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 7px;
  margin: 10px 20px;
}
.icons {
  cursor: pointer;
  font-size: 20px;
  margin-left: 5px;
}
</style>