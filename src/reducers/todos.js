import { createSlice, configureStore } from '@reduxjs/toolkit'
const todosSlice = createSlice({
  name: 'todos',
  initialState: [
    { name: 'Wash the car', completed: false },
    { name: 'Wash the clothes', completed: false },
  ],
  reducers: {
    addTodo(state, action) {
      state.push(action.payload)
    },
    removeTodo(state, action) {
     state.splice(action.payload.index, 1)
    },
    toggleTodo(state, action) {
     state[0].completed = !state[0].completed
    },
  },
})

const store = configureStore({
  reducer: {
    todos: todosSlice
  }
})

export default store;
export const { addTodo, removeTodo, toggleTodo } = todosSlice.actions
