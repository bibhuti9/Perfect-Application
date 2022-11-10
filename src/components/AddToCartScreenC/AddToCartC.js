import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";

import TextC from "../commonComponents/TextC";
import TwoViewC from "../commonComponents/TwoViewC";

import { COLORS, commonStyle, SIZES } from "../../themes/colors";
import { minus, plus, star } from "../../themes/icon";

import { useDispatch } from "react-redux";
import { fetchUsers } from "../../features/basketSlicer";

function RenderItem({ item }) {
  const dispatch = useDispatch();
  const minusButton = () => {
    if (item.count == 0) return;
    const sendData = {
      p_id: item.p_id,
      count: item.count - 1,
      _id: item._id,
    };
    dispatch(fetchUsers(sendData));
  };
  const plusButton = () => {
    if (item?.count == item?.menus.mqty) return;
    const sendData = {
      p_id: item.p_id,
      count: item.count + 1,
      _id: item._id,
    };
    dispatch(fetchUsers(sendData));
  };
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <View>
        <View>
          <Image
            source={{ uri: item.menus.mimages[0] }}
            style={styles.imageStyle}
          />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View>
          <TextC T={item.menus.mname} />
          <TwoViewC leftImage={star} text={item.menus.rating} />
        </View>
        <View style={styles.flexDirection}>
          <View style={styles.IDContainer}>
            <TouchableOpacity
              style={styles.IDButtonStyle}
              disabled={item.count == 0}
              onPress={minusButton}
            >
              <Image source={minus} style={commonStyle.iconStyle} />
            </TouchableOpacity>
            <TextC
              style={{ width: 30, textAlign: "center" }}
              T={item.count}
              fs={SIZES.M}
            />
            <TouchableOpacity
              disabled={item.count == item[0]?.menus.mqty}
              style={styles.IDButtonStyle}
              onPress={plusButton}
            >
              <Image source={plus} style={commonStyle.iconStyle} />
            </TouchableOpacity>
          </View>
          <TextC T={`₹${item?.menus.mprice * item.count}`} fs={SIZES.M} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
export const MemoRenderItem = React.memo(RenderItem);
const RenderComponent = ({ item }) => {
  return <MemoRenderItem item={item} />;
};

export function AddToCartC({ data }) {
  return (
    <View style={styles.container}>
      {data.map((value, index) => {
        return <RenderItem item={value} key={String(index)} />;
      })}
    </View>
  );
}
export const MemoAddToCartC = React.memo(AddToCartC);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: SIZES.marign,
  },
  cardContainer: {
    marginVertical: SIZES.marign,
    borderRadius: SIZES.radious,
    padding: SIZES.padding,
    backgroundColor: COLORS.white,
    ...commonStyle.shadow,
    flexDirection: "row",
  },
  imageStyle: {
    height: 100,
    width: 100,
    borderRadius: 400 / 2,
    marginHorizontal: SIZES.padding,
  },
  IDContainer: {
    flexDirection: "row",
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.radious + 10,
    backgroundColor: COLORS.white,
    alignItems: "center",
    overflow: "hidden",
  },
  IDButtonStyle: {
    backgroundColor: COLORS.secondary,
    padding: SIZES.padding - 5,
    ...commonStyle.shadow,
  },
  countStyle: {
    width: 30,
    textAlign: "center",
  },
  flexDirection: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
