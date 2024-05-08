import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useDispatch, useSelector } from "react-redux";
import { categoriesList, fetchCategories } from '../Action';

const DropdownComponent = () => {
  const [value, setValue] = useState(null);
  const categories = useSelector((state) => state.list.categories);
  const dispatch = useDispatch();


  return (
    <View style={styles.container}>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        data={categories}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Filter Products"
        value={value}
        onChange={(item) => {
          setValue(item.value);
          dispatch(categoriesList(item));
        }}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginBottom: 10,
  },
  dropdown: {
    height: 50,
    // borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    // backgroundColor: '',
    color:"white" 
  },
  placeholderStyle: {
    fontSize: 16,
    // color: 'black',
    
  },
});
