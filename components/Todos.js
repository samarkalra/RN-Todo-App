import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import FilterMenu from './FilterMenu';
import {useSelector} from 'react-redux';

const Todos = () => {
  const allTodos = useSelector(state => state.todo.todos);
  const filter = useSelector(state => state.visibleFilter.filter);
  let visibleTodos = [];
  if (filter === 'ACTIVE') {
    visibleTodos = allTodos.filter(todo => !todo.isCompleted);
  } else if (filter === 'COMPLETED') {
    visibleTodos = allTodos.filter(todo => todo.isCompleted);
  } else {
    visibleTodos = allTodos;
  }

  return (
    <View style={styles.content}>
      <AddTodo />
      <FilterMenu />
      <View style={styles.list}>
        {visibleTodos.length > 0 ? (
          <TodoList todos={visibleTodos} />
        ) : (
          <Text style={styles.emptyTodoText}>No todos to show</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 40,
  },
  emptyTodoText: {
    alignSelf: 'center',
  },
});

export default Todos;
