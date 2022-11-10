import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Touchable,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { u_id } from "../../config";
import { fetchOrders } from "../api/fetch_api";
import { COLORS, commonStyle, SIZES } from "../themes/colors";
import HeaderCartComponentC from "../components/commonComponents/HeaderCartC";
import { menu, rountRightArrow, star } from "../themes/icon";
import { useNavigation } from "@react-navigation/native";
import TextC from "../components/commonComponents/TextC";
import TwoViewC from "../components/commonComponents/TwoViewC";

export default function OrderedScreen() {
  const navigation = useNavigation();
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchOrders({ u_id: u_id }).then((result) => {
      setItems(result.Data);
    });
  }, []);
  const orderTrackerButtonPress = (item) => {
    navigation.navigate("TrackOrderWithMapScreen", { item: item });
  };
  const renderItem = ({ item }) => {
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
          <TextC
            T={item.status == "incomplete" ? "Yet To Deliver" : "Delivered"}
            fc={item.status == "incomplete" ? "red" : COLORS.secondary}
          />
        </View>
        {/* Track Button */}
        <TouchableOpacity
          style={styles.trackOrderButton}
          onPress={() => orderTrackerButtonPress(item)}
        >
          <Image source={rountRightArrow} style={commonStyle.iconStyle} />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ backgroundColor: COLORS.primary, flex: 1 }}>
      <View style={styles.headerAndSearchAndOptionContainer}>
        <HeaderCartComponentC
          leftIcon={menu}
          leftIconPress={() => navigation.openDrawer()}
        />
        <FlatList
          data={items}
          keyExtractor={(item) => {
            return item._id;
          }}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerAndSearchAndOptionContainer: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SIZES.padding,
    paddingBottom: SIZES.marign + 10,
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
  trackOrderButton: {
    backgroundColor: COLORS.secondary,
    alignItems: "center",
    justifyContent: "center",
    padding: SIZES.padding,
    borderRadius: SIZES.radious,
  },
});
