import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet, Alert } from 'react-native';

const AddTodo = ({ addTodo }) => {
    const [todoText, setTodoText] = useState('');
    const handleTodoAdd = () => {
        if (todoText.length <= 3) {
            Alert.alert('OOPS!', 'Todo must be over 3 chars long',
                [
                    {
                        text: 'Understood',
                        onPress: () => { console.log('alert closed') }
                    }
                ]
            );
        } else {
            addTodo(todoText);
            setTodoText('');
        }
    }
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='new todo...'
                value={todoText}
                onChangeText={(value) => { setTodoText(value) }}
            />
            <Button
                title='add todo'
                color='coral'
                onPress={() => { handleTodoAdd() }}
            ></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
});

export default AddTodo;