import { createSlice } from '@reduxjs/toolkit';

//  check if initial state can be preset and store updated using spread operator

export const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        // loadTodos: (state, action) => {

        // }

        addTodo: (state, action) => {
            state.push({
                text: action.payload,
                id: state.length + 1,
                isComplete: false
            });
        },
        deleteTodo: (state, action) => {
          console.log(action.payload)
            return state.filter((todo) => todo.id !== action.payload);
        },
        toggleComplete: (state, action) => {
            const selected = state.find((todo) => todo.id === action.payload);
            selected.isComplete = !selected.isComplete;
            return;
            // console.log(todo)
            // todo.isComplete = todo.isComplete ? false : true;
        }
    }
});

// export const { addTodo } = todoSlice.actions;
export const { addTodo, deleteTodo, toggleComplete } = todoSlice.actions;
export const selectTodos = (state) => {
    return state.todos;
};

export default todoSlice.reducer;
