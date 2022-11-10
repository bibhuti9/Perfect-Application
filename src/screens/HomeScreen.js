import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES } from "../themes/colors";
import { MemoHeaderAndSearchC } from "../components/HomeScreenC/HeaderAndSearchC";
import OptionsC from "../components/HomeScreenC/OptionsC";
import CategoriesC from "../components/commonComponents/CategoriesC";
import MenusListC from "../components/HomeScreenC/MenusListC";
import { useNavigation } from "@react-navigation/native";
export default function HomeScreen() {
  const navigation = useNavigation();
  const [currentCategory, setCurrentCategory] = useState("1");

  return (
    <SafeAreaView>
      <ScrollView
        alwaysBounceVertical={false}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Component */}
        <View style={styles.headerComponent}>
          <MemoHeaderAndSearchC onPress={() => navigation.openDrawer()} />
          <OptionsC />
        </View>
        <CategoriesC
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />
        <MenusListC currentCategory={currentCategory} />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  headerComponent: {
    backgroundColor: COLORS.white,
    paddingBottom: SIZES.marign + 10,
    borderBottomLeftRadius: SIZES.radious + 10,
    borderBottomRightRadius: SIZES.radious + 10,
  },
});
