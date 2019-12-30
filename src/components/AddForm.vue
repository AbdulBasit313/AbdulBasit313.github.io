<template>
  <div>
    <div>
      <b-form
        class="justify-content-center"
        @submit.prevent="$store.dispatch('addTodo')"
        inline
        v-if="show"
      >
        <b-input
          v-model="newTodo"
          type="text"
          name="newTodo"
          id="inline-form-input-name"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Prioritize your day!"
        ></b-input>

        <b-button
          @click="$store.dispatch('addTodo')"
          class="add-btn"
          variant="primary"
          v-bind:disabled="newTodo.trim().length<=0"
          v-if="!appMode"
        >Add</b-button>
        <b-button
          @click="$store.dispatch('addTodo')"
          class="add-btn"
          variant="primary"
          v-bind:disabled="newTodo.trim().length<=0"
          v-else
        >Edit</b-button>
      </b-form>
    </div>
  </div>
</template> 


<script>
export default {
  name: "AddForm",
  props: ["todos"],
  data() {
    return {
      show: true
    };
  },
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
button:disabled,
button[disabled] {
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
}

.form-inline .form-control {
  width: 75%;
  padding: 20px;
}
</style>