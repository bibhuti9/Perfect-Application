import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import TextC from './TextC';
import {COLORS, SIZES} from '../../themes/colors';

export default function TextInputC({placeholder, onChangeTextInput, lable}) {
  return (
    <View style={styles.container}>
      <TextC T={lable} fs={SIZES.S} />
      <TextInput
        style={styles.textInputStyle}
        onChangeText={val => {
          onChangeTextInput(val);
        }}
        placeholder={placeholder}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: SIZES.padding,
  },
  textInputStyle: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radious,
    padding: SIZES.padding,
    fontSize: SIZES.M,
    marginVertical: SIZES.marign,
  },
});
