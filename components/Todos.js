import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

const Todos = () => {
    const [todos, setTodos] = useState([
        { text: 'buy coffee', key: 1 },
        { text: 'create an app', key: 2 },
        { text: 'play on the switch', key: 3 }
    ]);
    const deleteTodo = (todoToDelete) => {
        setTodos(todos.filter(todo => todo.key !== todoToDelete.key))
    }
    const addTodo = (todoText) => {
        const newTodo = {
            text: todoText,
            key: todos.length + 1
        }
        setTodos([newTodo, ...todos]);
    }
    return (
        <View style={styles.content}>
            <AddTodo addTodo={addTodo} />
            <View style={styles.list}>
                <FlatList
                    data={todos}
                    renderItem={({ item }) => (
                        <TodoItem item={item} deleteTodo={deleteTodo} />
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        padding: 40
    },
    list: {
        flex: 1,
        marginTop: 40
    }
});

export default Todos;