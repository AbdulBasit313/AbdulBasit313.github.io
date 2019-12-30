import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
   state: {
      // not in use
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
      // not in use
      SET_LOGGED_IN(state, value) {
         state.user.loggedIn = value;
      },
      // not in use
      SET_USER(state, data) {
         state.user.data = data;
      },

      ADD_TODO(state) {
         console.log('add')
         if (!state.isEditing) {
            firebase.firestore()
               .collection('users')
               .doc(firebase.auth().currentUser.uid)
               .collection('todos')
               .add({
                  title: state.newTodo,
                  createdAt: new Date(),
                  isCompleted: false
               })

            state.newTodo = ''
            state.isEditing = false
         }
         else {
            state.selectedTodo.title = state.newTodo
            firebase.firestore()
               .collection('users')
               .doc(firebase.auth().currentUser.uid)
               .collection('todos')
               .doc(state.selectedTodo.id)
               .update({
                  title: state.newTodo,
               })

            state.newTodo = ''
            state.isEditing = false
         }
      },
      updateTodos(state, newTodo) {
         state.newTodo = newTodo
      },

      DEL_TODO(state, id) {
         firebase.firestore()
            .collection('users')
            .doc(firebase.auth().currentUser.uid)
            .collection('todos')
            .doc(id)
            .delete()
      },

      EDIT_TODO(state, todo) {

         let findingTodo = state.todos.find(item => {
            return item.title == todo.title
         })
         state.selectedTodo = findingTodo
         state.newTodo = state.selectedTodo.title
         state.isEditing = true
      }
   },
   actions: {
      // not in use
      fetchUser({ commit }, user) {
         commit("SET_LOGGED_IN", user !== null);
         if (user) {
            commit("SET_USER", {
               displayName: user.displayName,
               email: user.email
            });
         } else {
            commit("SET_USER", null);
         }
      },

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
   // not in use
   getters: {
      user(state) {
         return state.user
      }
   },
})