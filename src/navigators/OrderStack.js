import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import OrderedScreen from '../screens/OrderedScreen';
import TrackOrderWithMapScreen from '../screens/TrackOrderWithMapScreen';

const Stack = createStackNavigator();
export default function OrderStack() {
  const screens = [
    {
      name: 'OrderedScreen',
      component: OrderedScreen,
    },
    {
      name: 'TrackOrderWithMapScreen',
      component: TrackOrderWithMapScreen,
    },
  ];
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {screens.map((screens, index) => {
        return (
          <Stack.Screen
            name={screens.name}
            key={String(index)}
            component={screens.component}
          />
        );
      })}
    </Stack.Navigator>
  );
}
