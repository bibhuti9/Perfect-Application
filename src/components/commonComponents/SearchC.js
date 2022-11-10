import {TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';

import {COLORS, commonStyle, SIZES} from '../../themes/colors';
import {search} from '../../themes/icon';
import TextC from './TextC';

export default function SearchC() {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={search} style={commonStyle.iconStyle} />
      <TextC
        T={'Search Item'}
        fs={SIZES.S}
        style={{marginHorizontal: SIZES.marign}}
      />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.gray2,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
