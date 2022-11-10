import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import TextC from './TextC';
import {commonStyle, SIZES} from '../../themes/colors';

export default function TwoViewC({
  leftImage,
  onPress,
  text,
  disabled,
  bgcolor,
}) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: bgcolor,
      flexDirection: 'row',
      alignItems: 'center',
      padding: SIZES.padding,
      borderRadius: SIZES.radious,
    },
  });
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={styles.container}>
      <Image source={leftImage} style={commonStyle.iconStyle} />
      <TextC
        T={text}
        fs={SIZES.M}
        style={{marginHorizontal: SIZES.padding - 5}}
      />
    </TouchableOpacity>
  );
}
