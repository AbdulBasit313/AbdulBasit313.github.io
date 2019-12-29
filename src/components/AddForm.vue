<template>
  <form @submit.prevent="$store.dispatch('addTodo')">
    <input type="text" v-model="newTodo" name="newTodo" placeholder="Prioritize your task!" />
    <button v-bind:disabled="newTodo.trim().length<=0" v-if="!appMode" class="add-btn">Add</button>
    <button v-bind:disabled="newTodo.trim().length<=0" v-else class="add-btn">Edit</button>
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
input {
  padding: 4px;
  margin-right: 5px;
  font-size: 1.2rem;
  border: 1px solid #ccc;
}

.add-btn {
  display: inline-block;
  background: var(--light-color);
  color: #333;
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: opacity 0.2s ease-in;
  outline: none;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  margin-right: 0.2rem;
  background: #333333;
  color: #fff;
}

button:disabled,
button[disabled] {
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
}
</style>