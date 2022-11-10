import {View, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import React from 'react';

export default function StatusBarC({backgroundColor, ...props}) {
  return (
    <View style={[styles.statusBar, {backgroundColor}]}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </SafeAreaView>
    </View>
  );
}
const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});
