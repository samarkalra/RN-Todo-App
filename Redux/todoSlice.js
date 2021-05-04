import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo: (state, action) => {
            const { text } = action.payload;
            const newTodo = {
                text,
                key: state.todos.length
            }
            state.todos.unshift(newTodo);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.key !== action.payload.key)
        }
    }
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;