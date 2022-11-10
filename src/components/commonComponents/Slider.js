import {View, FlatList, StyleSheet, Image} from 'react-native';
import React from 'react';
import {COLORS, commonStyle, SIZES} from '../../themes/colors';
import TextC from './TextC';

export function Slider() {
  const images = [
    {
      iconName:
        'https://firebasestorage.googleapis.com/v0/b/foody-bef0b.appspot.com/o/demo%2Fdelhivery1.jpg?alt=media&token=91fe4e28-d286-4c9f-855f-a9cd0fe61a2c',
      id: 1,
      text: 'Track Order',
    },
    {
      iconName:
        'https://firebasestorage.googleapis.com/v0/b/foody-bef0b.appspot.com/o/demo%2Fdelhivery2.jpg?alt=media&token=e918e9ec-bf1e-41d6-b5f7-fa105dbe12d7',
      id: 2,
      text: 'Fast Delhivery',
    },
    {
      iconName:
        'https://firebasestorage.googleapis.com/v0/b/foody-bef0b.appspot.com/o/demo%2Fdelhivery3.jpg?alt=media&token=6338cba4-12bf-49ec-b601-bb978b286e74',
      id: 3,
      text: 'Safety',
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <View key={String(index)} style={styles.container}>
        <Image
          source={{uri: item.iconName}}
          style={styles.imagesStyle}
          resizeMode="contain"
        />
        <TextC
          fs={SIZES.S}
          T={item.text}
          fc={COLORS.primary}
          fw={SIZES.weight1}
        />
      </View>
    );
  };

  return (
    <View style={{marginVertical: SIZES.margin}}>
      <FlatList
        data={images}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => {
          return item.id;
        }}
        renderItem={renderItem}
      />
    </View>
  );
}

export const MemoSlider = React.memo(Slider);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: SIZES.margin,
    backgroundColor: COLORS.white,
    ...commonStyle.shadow,
    borderRadius: SIZES.radious - 10,
  },
  imagesStyle: {
    width: SIZES.width / 2,
    height: 150,
    marginRight: SIZES.marign,
  },
});
