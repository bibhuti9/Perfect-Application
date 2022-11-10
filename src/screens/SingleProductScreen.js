import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import uuid from "react-native-uuid";

import { leftArrow, minus, plus, star } from "../themes/icon";
import { COLORS, commonStyle, SIZES } from "../themes/colors";

import TextC from "../components/commonComponents/TextC";
import TwoViewC from "../components/commonComponents/TwoViewC";
import { Slider } from "../components/commonComponents/Slider";
import HeaderCartComponentC from "../components/commonComponents/HeaderCartC";

import { useNavigation } from "@react-navigation/native";
import { fetchMenus } from "../api/fetch_api";
import { singleProduct } from "../data/dummyData";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUsers,
  selectAllCart,
  selectSingleAddToCart,
} from "../features/basketSlicer";
import { u_id } from "../../config";

function ImageContainer({ data }) {
  return (
    <View>
      <Image source={{ uri: data[0]?.mimages[0] }} style={styles.imageStyle} />
    </View>
  );
}
export const MemoImageContainer = React.memo(ImageContainer);

function NameAndPrice({ data }) {
  return (
    <View style={styles.containerSpace}>
      <TextC
        T={data[0]?.mname}
        fs={SIZES.M}
        fw={SIZES.weight1}
        fc={COLORS.primary}
      />
      <TextC T={`₹${data[0]?.mprice}`} fs={SIZES.M} />
    </View>
  );
}
function IDAndReview({ data, count, setCount }) {
  const minusButton = () => {
    if (count == 0) return;
    setCount(count - 1);
  };
  const plusButton = () => {
    if (count == data[0].mqty) return;
    setCount(count + 1);
  };
  return (
    <View style={styles.containerSpace}>
      <TwoViewC leftImage={star} text={data[0]?.rating} />
      <View style={styles.iDAndReviewContainer}>
        <TouchableOpacity
          disabled={count == 0}
          onPress={minusButton}
          style={styles.IDbuttonStyle}
        >
          <Image source={minus} style={commonStyle.iconStyle} />
        </TouchableOpacity>
        <TextC T={count} style={styles.countStyle} />
        <TouchableOpacity
          disabled={count == data[0]?.mqty}
          onPress={plusButton}
          style={styles.IDbuttonStyle}
        >
          <Image source={plus} style={commonStyle.iconStyle} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function AddToCartC({ data, text, count }) {
  const dispatch = useDispatch();
  const addToCartPress = () => {
    const sendData = {
      _id: uuid.v4(),
      p_id: data[0]._id,
      c_id: data[0].category._id,
      count: count,
      r_id: data[0].restuarent._id,
      u_id: u_id,
    };
    dispatch(fetchUsers(sendData));
  };

  return (
    <View style={styles.addToCartContainerStyle}>
      <View>
        <TextC T={`₹${data[0]?.mprice * count}`} fs={SIZES.L} />
      </View>
      <TouchableOpacity
        onPress={addToCartPress}
        disabled={count == 0}
        style={styles.addToCartButtonStyle}
      >
        <TextC T={text} fc={COLORS.white} />
      </TouchableOpacity>
    </View>
  );
}

export default function SingleProductScreen({ route }) {
  const navigation = useNavigation();
  const [items, setItems] = useState(singleProduct);
  const [count, setCount] = useState(0);
  const { _id } = route.params;

  const carts = useSelector((state) => selectSingleAddToCart(state, _id));

  const selectSingleProduct = () => {
    fetchMenus({ p_id: _id }).then((result) => {
      setItems(result);
    });
  };

  useEffect(() => {
    if (carts.length > 0) {
      setCount(carts[0].count);
    }
  }, [items]);

  useEffect(() => {
    selectSingleProduct();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <HeaderCartComponentC
            leftIcon={leftArrow}
            leftIconPress={() => {
              navigation.goBack();
            }}
          />
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.seperator}></View>
          <ImageContainer data={items} />
        </View>
        <View style={styles.productInfoContainer}>
          <NameAndPrice data={items} />
          <IDAndReview data={items} count={count} setCount={setCount} />
          <TextC
            T={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!"
            }
            fs={SIZES.SM}
            style={styles.containerSpace}
          />
          <Slider />
          <AddToCartC
            count={count}
            data={items}
            text={items[0]?.count != undefined ? "Update Cart" : "Add To Cart"}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  headerContainer: {
    margin: SIZES.marign,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.gray3,
    borderTopLeftRadius: SIZES.radious + 10,
    borderTopRightRadius: SIZES.radious + 10,
    padding: SIZES.padding,
  },
  imageStyle: {
    height: SIZES.width / 1.4,
    width: SIZES.width / 1.4,
    borderRadius: 400 / 2,
    ...commonStyle.shadow,
    marginVertical: SIZES.M,
  },
  seperator: {
    width: SIZES.width / 3.4,
    borderWidth: 1,
    marginBottom: SIZES.marign,
  },
  productInfoContainer: {
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.marign + 10,
  },
  containerSpace: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: SIZES.marign,
  },
  iDAndReviewContainer: {
    flexDirection: "row",
    borderRadius: SIZES.radious,
    overflow: "hidden",
  },
  IDbuttonStyle: {
    backgroundColor: COLORS.secondary,
    padding: 10,
  },
  countStyle: {
    marginHorizontal: 4,
    alignSelf: "center",
  },
  addToCartContainerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: SIZES.padding,
    marginVertical: SIZES.marign + 10,
    ...commonStyle.shadow,
    alignItems: "center",
  },
  addToCartButtonStyle: {
    backgroundColor: COLORS.primary,
    borderTopRightRadius: SIZES.radious,
    borderBottomRightRadius: SIZES.radious,
    borderBottomLeftRadius: SIZES.radious,
    padding: SIZES.padding + 5,
    width: SIZES.width / 1.5,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
});
