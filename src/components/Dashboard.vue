<template v-if="">
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
import db from "./firebaseInit";

export default {
  name: "Dashboard",
  components: {
    Header,
    AddForm,
    TodoList
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.user;
    },
    //  change its position
    todos() {
      return this.$store.state.todos;
    }
  },
  created() {
    db.collection("todos")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
         //  console.log("doc", doc.data());
         //  console.log("doc", doc.id);
          const data = {
            id: doc.id,
            title: doc.data().title,
            isCompleted: doc.data().isCompleted
          };
          this.$store.state.todos.push(data);
        });
      });
  }
};
</script>


<style scoped>
.app {
  /* height: 100vh; */
  /* background-color: rgb(250, 250, 250); */
}
.dashboard {
  background-color: rgb(240, 240, 240);
  box-shadow: 0px 0px 10px grey;
  width: 460px;
  padding: 46px;
  margin: 0 auto;
  margin-top: 60px;
}
</style>
