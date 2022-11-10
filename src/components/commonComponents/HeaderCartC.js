import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import TwoViewC from "./TwoViewC";
import TextC from "./TextC";

import { COLORS, commonStyle, SIZES } from "../../themes/colors";
import { cart } from "../../themes/icon";

import { useSelector } from "react-redux";
import { selectAllCart } from "../../features/basketSlicer";

export default function HeaderCartComponentC({ leftIcon, leftIconPress }) {
  const navigation = useNavigation();
  const carts = useSelector((state) => selectAllCart(state));
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftButtonStyle} onPress={leftIconPress}>
        <Image source={leftIcon} style={commonStyle.iconStyle} />
      </TouchableOpacity>
      <TwoViewC
        bgcolor={COLORS.secondary}
        leftImage={cart}
        onPress={() => navigation.push("AddToCartScreen")}
        text={carts.length}
        disabled={false}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  leftButtonStyle: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.radious,
    justifyContent: "center",
    alignItems: "center",
    ...commonStyle.shadow,
    padding: SIZES.padding,
  },
});
