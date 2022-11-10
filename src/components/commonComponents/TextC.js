import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../themes/colors';

export default function TextC({T, fw, nc, fs = SIZES.S, fc, style}) {
  const styles = StyleSheet.create({
    textStyle: {
      fontSize: fs,
      color: fc,
      fontWeight: fw,
      ...style,
    },
  });
  return (
    <Text numberOfLines={nc} style={styles.textStyle}>
      {T}
    </Text>
  );
}
