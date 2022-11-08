import { createSlice } from '@reduxjs/toolkit';

//  check if initial state can be preset and store updated using spread operator

export const todoSlice = createSlice(
  {
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        deleteTodo: (state, action) => {
            state.filter(todo => todo.id !== action.payload.id)
        },
        toggleComplete: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload.id)
            todo.complete = !todo.complete;
        }
    }
  })


export const { addTodo, deleteTodo, toggleComplete } = todoSlice.actions;
export const selectTodos = (state) => {
  return state.todos
};

export default todoSlice.reducer;