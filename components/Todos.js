import React, { useState, useEffect } from 'react';
import { 
    View, 
    Text, 
    FlatList, 
    StyleSheet 
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

const Todos = () => {
    const [todos, setTodos] = useState([]);

    const deleteTodo = async (todoToDelete) => {
        const newTodos = todos.filter(todo => todo.key !== todoToDelete.key);
        await AsyncStorage.setItem('todos', JSON.stringify({
            todosList: newTodos
        }));
        setTodos(newTodos);
    }

    const addTodo = async (todoText) => {
        const newTodo = {
            text: todoText,
            key: todos.length + 1
        }
        const newTodos = [newTodo, ...todos];
        await AsyncStorage.setItem('todos', JSON.stringify({
            todosList: newTodos
        }));
        setTodos(newTodos);
    }

    useEffect(async () => {
        let localTodos = await AsyncStorage.getItem('todos');
        if (localTodos) {
            localTodos = JSON.parse(localTodos);
            if (localTodos.todosList.length > 0) {
                setTodos(localTodos.todosList);
            }
        }
    }, []);

    return (
        <View style={styles.content}>
            <AddTodo addTodo={addTodo} />
            {!todos.length ?
            <View style={styles.noTodoTextContainer}>
                <Text style={styles.noTodoText}>No Todo Item to show!</Text>
            </View>
            :
            <View style={styles.list}>
                <FlatList
                    data={todos}
                    renderItem={({ item }) => (
                        <TodoItem item={item} deleteTodo={deleteTodo} />
                    )}
                />
            </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        padding: 40,
    },
    noTodoTextContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noTodoText: {
        fontSize: 16
    },
    list: {
        flex: 1,
        marginTop: 40
    }
});

export default Todos;