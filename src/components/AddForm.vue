<template>
  <form @submit.prevent="$store.dispatch('addTodo')">
    <input
      type="text"
      v-model="newTodo"
      name="newTodo"
      placeholder="don't forget what has to be done!"
    />
    <button v-bind:disabled="newTodo.trim().length<=0" v-if="!appMode">Add</button>
    <button v-bind:disabled="newTodo.trim().length<=0" v-else>Edit</button>
  </form>
</template> 


<script>
export default {
  name: "AddForm",
  props: ["todos"],
  computed: {
    appMode() {
      return this.$store.state.isEditing;
    },
    newTodo: {
      get() {
        return this.$store.state.newTodo;
      },
      set(value) {
        this.$store.commit("updateTodos", value);
      }
    }
  }
};
</script>


<style scoped>
</style>