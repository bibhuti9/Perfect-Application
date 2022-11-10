import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {category} from '../../data/dummyData';
import {COLORS, commonStyle, SIZES} from '../../themes/colors';
import TextC from './TextC';

export default function CategoriesC({setCurrentCategory, currentCategory}) {
  const onPress = _id => {
    setCurrentCategory(_id);
  };
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => onPress(item._id)}
        style={[
          styles.buttonStyle,
          {
            backgroundColor:
              item._id == currentCategory ? COLORS.primary : COLORS.white,
          },
        ]}>
        <Image source={{uri: item.cicon}} style={commonStyle.iconStyle} />
        <Text
          style={{
            marginHorizontal: SIZES.marign,
            color: item._id == currentCategory ? COLORS.white : COLORS.primary,
          }}>
          {item.cname}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <TextC T={'Categories'} fw={SIZES.weight1} fs={SIZES.M} />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={category}
        keyExtractor={item => {
          return item._id;
        }}
        renderItem={renderItem}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: SIZES.marign,
    marginVertical: SIZES.marign + 10,
  },
  buttonStyle: {
    padding: SIZES.padding,
    borderRadius: SIZES.radious,
    marginVertical: SIZES.marign + 10,
    marginRight: SIZES.marign + 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
