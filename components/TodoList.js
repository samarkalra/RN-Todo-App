import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
    return (
        <FlatList
            data={todos}
            renderItem={({ item }) => (
                <TodoItem item={item} />
            )}
        />
    );
}

export default TodoList;
