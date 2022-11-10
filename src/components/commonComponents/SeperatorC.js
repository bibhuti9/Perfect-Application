import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../themes/colors';

export default function SeperatorC({color = COLORS.black}) {
  return (
    <View
      style={{
        borderBottomColor: color,
        borderBottomWidth: StyleSheet.hairlineWidth,
      }}></View>
  );
}
