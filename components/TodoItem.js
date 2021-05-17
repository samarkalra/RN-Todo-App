import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from '@react-native-community/checkbox';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../Redux/todoSlice';

const TodoItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleTodoDelete = (key) => {
        dispatch(deleteTodo({ key }));
    }

    const handleToggleTodo = (key) => {
        dispatch(toggleTodo({ key }));
    }

    return (
        <View style={styles.todoContainer}>
            <CheckBox
                value={item.isCompleted}
                onValueChange={() => handleToggleTodo(item.key)}
            />
            <View style={styles.rightView}>
                <Text style={styles.todoText}>{item.text}</Text>
                <TouchableOpacity onPress={() => handleTodoDelete(item.key)}>
                    <Icon
                        name='delete'
                        size={25}
                        color='coral'
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    todoContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 16,
        marginBottom: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
    },
    rightView: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    todoText: {
        marginLeft: 10
    },
});

export default TodoItem;