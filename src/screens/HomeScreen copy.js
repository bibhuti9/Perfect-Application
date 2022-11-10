import {View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {MemoHeaderAndSearchC} from '../components/HomeScreenC/HeaderAndSearchC';
import {COLORS} from '../themes/colors';
import OptionsC from '../components/HomeScreenC/OptionsC';
import CategoriesC from '../components/commonComponents/CategoriesC';
import MenusListC from '../components/HomeScreenC/MenusListC';

export default function HomeScreen() {
  const [currentCategory, setCurrentCategory] = useState('1');
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.headerAndSearchAndOptionContainer}>
        <MemoHeaderAndSearchC />
      </View>
      <ScrollView
        alwaysBounceVertical={false}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <View>
          <OptionsC />
          <CategoriesC
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
          />
        </View>
        <View>
          <MenusListC currentCategory={currentCategory} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  headerAndSearchAndOptionContainer: {
    backgroundColor: COLORS.white,
  },
});
