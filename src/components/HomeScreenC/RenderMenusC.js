import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../themes/colors";
import TextC from "../commonComponents/TextC";
import TwoViewC from "../commonComponents/TwoViewC";
import { cart } from "../../themes/icon";
import uuid from "react-native-uuid";
import { useNavigation } from "@react-navigation/native";

import { useDispatch, useSelector } from "react-redux";
import { u_id } from "../../../config";
import { fetchUsers, selectAllCart } from "../../features/basketSlicer";

export default function RenderMenusC({ value }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const ImageContainer = () => {
    return (
      <Image source={{ uri: value.mimages[0] }} style={styles.imageStyle} />
    );
  };
  const onPress = async () => {
    const sendData = {
      _id: uuid.v4(),
      p_id: value._id,
      c_id: value.category._id,
      count: 1,
      r_id: value.restuarent._id,
      u_id: u_id,
    };
    dispatch(fetchUsers(sendData));
  };
  const navigateToSingleScreen = () => {
    navigation.push("SingleProductScreen", {
      _id: value._id,
      type: "Add To Cart",
    });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={navigateToSingleScreen}>
      <View style={styles.imageContainer}>
        <ImageContainer />
        <TextC nc={1} T={value.mname} fs={SIZES.S} />
      </View>
      <View style={styles.productInfoContainer}>
        <TextC T={`₹${value.mprice}`} />
        <View style={styles.buttonStyle}>
          <TwoViewC onPress={onPress} leftImage={cart} text={"ADD"} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    width: SIZES.width / 2.3,
    borderRadius: SIZES.radious,
    backgroundColor: COLORS.white,
    marginVertical: SIZES.marign,
    padding: SIZES.padding,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  productInfoContainer: {
    marginTop: SIZES.marign + 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonStyle: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.radious,
  },
});
