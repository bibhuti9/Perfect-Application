import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Lottie from "lottie-react-native";
import { spinner } from "../../themes/icon";

export default function Spinner() {
  return (
    <View style={[StyleSheet.absoluteFill, styles.container]}>
      <Lottie source={spinner} autoPlay loop />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
});
