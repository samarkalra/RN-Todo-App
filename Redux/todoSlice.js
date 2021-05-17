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
                key: state.todos.length,
                isCompleted: false,
            }
            state.todos.unshift(newTodo);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.key !== action.payload.key)
        },
        toggleTodo: (state, action) => {
            const { key } = action.payload;
            state.todos = state.todos.map(todo => 
                (todo.key === key) ? {...todo, isCompleted: !todo.isCompleted}: todo
            )
        }
    }
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;