import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { MemoAddToCartC } from "../components/AddToCartScreenC/AddToCartC";
import TextC from "../components/commonComponents/TextC";
import SeperatorC from "../components/commonComponents/SeperatorC";
import HeaderCartComponentC from "../components/commonComponents/HeaderCartC";

import { leftArrow } from "../themes/icon";
import { COLORS, commonStyle, SIZES } from "../themes/colors";

import { useSelector } from "react-redux";
import { selectAllCart, selectTotalPrice } from "../features/basketSlicer";
import { createOrder } from "../api/fetch_api";

export default function AddToCartScreen() {
  const totalAmount = useSelector(selectTotalPrice);
  const item = useSelector(selectAllCart);
  const navigation = useNavigation();
  const addToOrder = () => {
    navigation.push("AddressScreen");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ScrollView bounces={false}>
          <View style={styles.headerComponent}>
            <HeaderCartComponentC
              leftIcon={leftArrow}
              leftIconPress={() => {
                navigation.goBack();
              }}
            />
          </View>
          <View>
            <MemoAddToCartC data={item} />
          </View>
        </ScrollView>
        <View style={styles.bottomContainer}>
          <View>
            <TextC style={{ alignSelf: "center" }} T={"Apply Promocode"} />
          </View>
          <View style={styles.flexDirection}>
            <TextC T={"Subtotal"} fc={COLORS.gray1} />
            <TextC T={`₹${totalAmount}`} fc={COLORS.gray1} />
          </View>
          <SeperatorC />
          <View style={styles.flexDirection}>
            <TextC T={"Discount"} fc={COLORS.gray1} />
            <TextC T={`₹${(totalAmount * 2) / 100}`} fc={COLORS.gray1} />
          </View>
          <SeperatorC />
          <View style={styles.flexDirection}>
            <TextC T={"Total"} />
            <TextC T={`₹${totalAmount - (totalAmount * 2) / 100}`} />
          </View>
          <TouchableOpacity style={styles.orderButton} onPress={addToOrder}>
            <TextC T={"Order"} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  headerComponent: {
    padding: 10,
    backgroundColor: COLORS.primary,
  },
  bottomContainer: {
    backgroundColor: COLORS.white,
    justifyContent: "center",
    padding: SIZES.padding + 10,
    borderTopLeftRadius: SIZES.radious + 10,
    borderTopRightRadius: SIZES.radious + 10,
    ...commonStyle.shadow,
  },
  flexDirection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: SIZES.marign,
  },
  orderButton: {
    marginVertical: SIZES.marign + 10,
    backgroundColor: COLORS.secondary,
    padding: SIZES.padding,
    borderRadius: SIZES.radious,
    justifyContent: "center",
    alignItems: "center",
  },
});
