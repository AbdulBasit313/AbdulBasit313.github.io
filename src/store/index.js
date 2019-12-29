import Vue from 'vue'
import Vuex from 'vuex'
import db from "../components/firebaseInit";

Vue.use(Vuex)

export default new Vuex.Store({
   state: {
      user: {
         loggedIn: false,
         data: null
      },
      todos: [],
      newTodo: '',
      isEditing: false,
      selectedTodo: {}
   },
   mutations: {
      ADD_TODO(state) {
         if (!state.isEditing) {
            console.log('addTodo')
            db.collection('todos')
               .add({ title: state.newTodo, isCompleted: false })
               .catch((e) => console.log(`error =====> ${e}`));

            state.todos = [...state.todos, { title: state.newTodo, isCompleted: false }]
            state.newTodo = ''
            state.isEditing = false
         }
         else {
            console.log('in else')
            state.selectedTodo.title = state.newTodo

            db.collection('todos')
               .doc(state.selectedTodo.id)
               .update({ title: state.newTodo })
               .catch((e) => console.log(`error =====> ${e}`));

            state.newTodo = ''
            state.isEditing = false
         }
      },
      updateTodos(state, newTodo) {
         state.newTodo = newTodo
      },
      DEL_TODO(state, id) {
         db.collection('todos')
            .doc(id)
            .delete()
            .catch((e) => console.log(`error =====> ${e}`));

         state.todos = state.todos.filter(item => item.id !== id);
      },
      async EDIT_TODO(state, todo) {
         console.log('edit todo')

         let findingTodo = state.todos.find(item => {
            return item.title == todo.title
         })
         state.selectedTodo = findingTodo
         state.newTodo = state.selectedTodo.title
         state.isEditing = true

      }
   },
   actions: {
      addTodo({ commit }) {
         commit('ADD_TODO')
      },
      delTodo({ commit }, id) {
         commit('DEL_TODO', id)
      },
      editTodo({ commit }, todo) {
         commit('EDIT_TODO', todo)
      },
   },
   modules: {

   },
})