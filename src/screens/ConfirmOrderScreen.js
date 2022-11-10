import { View, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Lottie from "lottie-react-native";

import TextC from "../components/commonComponents/TextC";
import {
  selectAllAddToCart,
  selectUserCurrentLocation,
} from "../features/basketSlicer";
import { createOrder } from "../api/fetch_api";
import { COLORS, SIZES } from "../themes/colors";
import { spinner, sucessfully } from "../themes/icon";
import { useNavigation } from "@react-navigation/native";

export default function ConfirmOrderScreen({ route }) {
  const navigation = useNavigation();
  const { address } = route.params;
  // const item = useSelector(selectAllAddToCart);
  const [confirm, setConfirm] = useState(false);
  // const userCurrentLocation = useSelector(selectUserCurrentLocation);

  return <View></View>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  orderContainerStyle: {
    alignItems: "center",
  },
  lottieStyle: {
    height: 300,
    width: 300,
  },
  confirmButtonContainer: {
    alignSelf: "center",
    position: "absolute",
    bottom: 40,
  },
  confirmButtonStyle: {
    backgroundColor: COLORS.primary,
    width: SIZES.width / 1.2,
    alignItems: "center",
    padding: SIZES.padding,
    borderRadius: SIZES.radious,
  },
});
