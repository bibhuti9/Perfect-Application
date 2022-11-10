import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./CustomDrawer";
import TabNavigator from "./TabNavigator";
import OrderStack from "./OrderStack";
import { COLORS } from "../themes/colors";

const Drawer = createDrawerNavigator();
export default function DrawerStack() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: COLORS.secondary,
        drawerActiveTintColor: COLORS.primary,
        drawerInactiveTintColor: COLORS.primary,
      }}
    >
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="OrderStack" component={OrderStack} />
    </Drawer.Navigator>
  );
}
