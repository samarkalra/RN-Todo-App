import React, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import { useSelector } from 'react-redux';

const Todos = () => {
    const todos = useSelector(state => state.todo.todos);
    return (
        <View style={styles.content}>
            <AddTodo />
            <View style={styles.list}>
                {todos.length > 0 ?
                    <TodoList todos={todos} />
                    : <Text style={styles.emptyTodoText}>No todos to show</Text>
                }
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
    },
    emptyTodoText: {
        alignSelf: 'center',
    }
});

export default Todos;