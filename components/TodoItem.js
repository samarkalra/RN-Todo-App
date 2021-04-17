import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TodoItem = ({ item, deleteTodo }) => {
    return (
        <View style={styles.todoContainer}>
            <Text>{item.text}</Text>
            <TouchableOpacity onPress={() => { deleteTodo(item) }}>
                <Icon
                    name='delete'
                    size={25}
                    color='coral'
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    todoContainer: {
        padding: 16,
        marginBottom: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export default TodoItem;