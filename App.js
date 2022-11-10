import React from "react";
import { Platform, StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import FlashMessage from "react-native-flash-message";

import { COLORS } from "./src/themes/colors";
import StatusBarC from "./src/components/commonComponents/StatusBarC";
import DrawerStack from "./src/navigators/DrawerStack";

import { Provider } from "react-redux";
import { store } from "./store";

export default function App() {
  return (
    <Provider store={store}>
      {Platform.OS == "ios" ? (
        <StatusBarC backgroundColor={COLORS.primary} barStyle="light-content" />
      ) : (
        <StatusBar
          hidden={false}
          backgroundColor={COLORS.primary}
          translucent={false}
        />
      )}
      <NavigationContainer>
        <DrawerStack />
      </NavigationContainer>
      <FlashMessage position="top" />
    </Provider>
  );
}
