import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
   state: {
      todos: [
         { id: 1, title: "go to gym", completed: false },
         { id: 2, title: "buy mouse", completed: true },
         { id: 3, title: "prepare for pandas exam", completed: false }
      ],
      newTodo: '',
      isEditing: false,
      selectedTodo: {}
   },
   mutations: {
      ADD_TODO(state) {
         if (!state.isEditing) {
            state.todos = [...state.todos, { id: Math.random(), title: state.newTodo, completed: false }]
            state.newTodo = ''
            state.isEditing = false
         }
         else {
            state.selectedTodo.title = state.newTodo
            state.newTodo = ''
            state.isEditing = false
         }
      },
      updateTodos(state, newTodo) {
         state.newTodo = newTodo
      },
      DEL_TODO(state, id) {
         state.todos = state.todos.filter(item => item.id !== id);
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