import React, { useEffect } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Geolocation from "react-native-geolocation-service";

import HomeScreen from "../screens/HomeScreen";
import SingleProductScreen from "../screens/SingleProductScreen";
import AddToCartScreen from "../screens/AddToCartScreen";
import GoogleMapScreen from "../screens/GoogleMapScreen";
import AddressScreen from "../screens/AddressScreen";

import { askUserToAllowLocation } from "../api/common_function";

import { useDispatch, useSelector } from "react-redux";
import ConfirmOrderScreen from "../screens/ConfirmOrderScreen";

import { fetchAddToCart } from "../api/fetch_api";
import { u_id } from "../../config";
import {
  setAllCart,
  selectLoader,
  setUserCurrentLocation,
} from "../features/basketSlicer";

import Spinner from "../components/commonComponents/Spinner";

const Stack = createStackNavigator();
export default function TabNavigator() {
  const loader = useSelector((state) => selectLoader(state));
  const dispatch = useDispatch();
  useEffect(() => {
    fetchAddToCart(u_id).then((result) => {
      dispatch(setAllCart(result));
    });
  }, []);

  useEffect(() => {
    askUserToAllowLocation();
    Geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        dispatch(
          setUserCurrentLocation({
            latitude,
            longitude,
          })
        );
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      }
    );
  }, []);

  const screenNmaes = [
    {
      name: "HomeScreen",
      component: HomeScreen,
    },
    {
      name: "SingleProductScreen",
      component: SingleProductScreen,
    },
    {
      name: "AddToCartScreen",
      component: AddToCartScreen,
    },
    {
      name: "googleMap",
      component: GoogleMapScreen,
    },
    {
      name: "AddressScreen",
      component: AddressScreen,
    },
    {
      name: "ConfirmOrderScreen",
      component: ConfirmOrderScreen,
    },
  ];
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {screenNmaes.map((screenName, index) => {
          return (
            <Stack.Screen
              key={String(index)}
              name={screenName.name}
              component={screenName.component}
            />
          );
        })}
      </Stack.Navigator>
      {loader && <Spinner />}
    </>
  );
}
