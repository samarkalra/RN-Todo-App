import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {setVisibilityFilter} from '../Redux/visibilityFilterSlice';
import {useDispatch, useSelector} from 'react-redux';

const FilterMenu = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.visibleFilter.filter);

  return (
    <View style={styles.filterMenuContainer}>
      <Button
        title="All"
        disabled={filter === 'ALL' ? true : false}
        onPress={() => dispatch(setVisibilityFilter({filter: 'ALL'}))}
      />
      <Button
        title="Active"
        disabled={filter === 'ACTIVE' ? true : false}
        onPress={() => dispatch(setVisibilityFilter({filter: 'ACTIVE'}))}
      />
      <Button
        title="Completed"
        disabled={filter === 'COMPLETED' ? true : false}
        onPress={() => dispatch(setVisibilityFilter({filter: 'COMPLETED'}))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterMenuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default FilterMenu;
