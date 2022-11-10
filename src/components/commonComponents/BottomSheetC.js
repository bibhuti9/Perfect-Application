import React, {useMemo, useRef} from 'react';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../themes/colors';

export default function BottomSheetC({children, style}) {
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '70%'], []);
  return (
    <BottomSheet
      style={{backgroundColor: COLORS.primary}}
      ref={bottomSheetRef}
      snapPoints={snapPoints}>
      {children}
    </BottomSheet>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
