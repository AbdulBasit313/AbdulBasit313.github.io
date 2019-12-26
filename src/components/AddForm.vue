<template>
  <form @submit.prevent="addTodo">
    <input type="text" v-model="title" name="title" placeholder="don't forget what has to be done" />
    <button>Add</button>
  </form>
</template>


<script>
export default {
  name: "AddForm",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    addTodo() {
      const newTodo = {
        id: Math.random(),
        title: this.title,
        completed: false
      };
      // send to parent
      if (!this.title.trim()) {
        alert("Input can't be empty");
      } else {
        this.$emit("add-todo", newTodo);
      }
      this.title = "";
    }
  }
};
</script>


<style scoped>
</style>