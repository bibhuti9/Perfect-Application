import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fetchMenus} from '../../api/fetch_api';
import RenderMenusC from './RenderMenusC';
import {SIZES} from '../../themes/colors';
import TextC from '../commonComponents/TextC';

export default function MenusListC({currentCategory}) {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    fetchMenus({c_id: currentCategory}).then(result => {
      setMenus(result);
    });
  }, [currentCategory]);

  return (
    <View style={styles.container}>
      <TextC fw={SIZES.weight1} T={'Menus'} fs={SIZES.M} />
      <View style={styles.cardContainer}>
        {menus.map((value, index) => (
          <RenderMenusC value={value} key={index} />
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: SIZES.marign,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
});
