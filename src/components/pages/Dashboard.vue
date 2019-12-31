<template v-if="">
  <div class="app">
    <Header />
    <div class="dashboard">
      <div class="title">YOUR LIST</div>
      <AddForm v-bind:todos="todos" />
      <TodoList v-bind:todos="todos" />
    </div>
  </div>
</template>


<script>
import Header from "../layout/Header";
import TodoList from "../TodoList";
import AddForm from "../AddForm";
import firebase from "firebase";

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
  },
  methods: {
    async getTodos(id) {
      let todoRef = await firebase
        .firestore()
        .collection("users")
        .doc(id)
        .collection("todos");

      todoRef.onSnapshot(snap => {
        this.$store.state.todos = [];
        snap.forEach(doc => {
          let data = {
            id: doc.id,
            title: doc.data().title,
            isCompleted: doc.data().isCompleted
          };
          this.$store.state.todos.push(data);
        });
      });
    }
  },

  created() {
    this.getTodos(firebase.auth().currentUser.uid);
  }
};
</script>


<style scoped>
.app {
  background-color: transparent;
}

.title {
  background-color: #343a40;
  color: #ffffff;
  padding: 20px;
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
  letter-spacing: 10px;
}

.dashboard {
  background-color: rgb(240, 240, 240);
  box-shadow: 0px 0px 10px grey;
  width: 460px;
  padding-bottom: 10px;
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: 60px;
}

/* // Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
  .dashboard {
    width: 280px;
  }
}
</style>
