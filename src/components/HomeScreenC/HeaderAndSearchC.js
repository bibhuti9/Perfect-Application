import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import HeaderCartComponentC from '../commonComponents/HeaderCartC';
import SearchC from '../commonComponents/SearchC';
import {COLORS, commonStyle, SIZES} from '../../themes/colors';
import {menu, userProfile} from '../../themes/icon';

export function HeaderAndSearch({onPress}) {
  return (
    <View style={styles.container}>
      <HeaderCartComponentC leftIcon={menu} leftIconPress={onPress} />
      <View style={styles.searchContainer}>
        <SearchC />
      </View>
    </View>
  );
}
export const MemoHeaderAndSearchC = React.memo(HeaderAndSearch);
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SIZES.padding,
    borderBottomLeftRadius: SIZES.radious + 20,
    borderBottomRightRadius: SIZES.radious + 20,
    ...commonStyle.shadow,
  },
  searchContainer: {
    backgroundColor: COLORS.gray2,
    margin: SIZES.marign + 20,
    padding: SIZES.padding + 5,
    borderRadius: SIZES.radious + 10,
  },
});
