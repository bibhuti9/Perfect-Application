import { View, Text } from "react-native";
import React from "react";

export default function AddToCartRenderC({ item }) {
  return (
    <View>
      <Text>AddToCartRenderC</Text>
    </View>
  );
}
export const MemoAddToCartRenderC = React.memo(AddToCartRenderC);
