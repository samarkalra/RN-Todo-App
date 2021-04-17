import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header';
import Todos from './components/Todos';

const App = () => {
  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header title='My Todos' />
        <Todos />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

export default App;
