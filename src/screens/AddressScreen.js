import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {
  selectAllAddToCart,
  selectUserCurrentLocation,
} from '../features/basketSlicer';
import {MemoHeaderAndSearchC} from '../components/HomeScreenC/HeaderAndSearchC';
import HeaderCartComponentC from '../components/commonComponents/HeaderCartC';
import {leftArrow} from '../themes/icon';
import {COLORS, SIZES} from '../themes/colors';
import TextC from '../components/commonComponents/TextC';
import TextInputC from '../components/commonComponents/TextInputC';
import {createOrder} from '../api/fetch_api';
import {useNavigation} from '@react-navigation/native';

export default function AddressScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [state, setState] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const confirnOrder = () => {
    navigation.push('ConfirmOrderScreen', {
      address: `${name}, ${address}, ${city}, ${pinCode}, ${state} ${phoneNumber}`,
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <HeaderCartComponentC
              leftIconPress={() => {
                navigation.goBack();
              }}
              leftIcon={leftArrow}
            />
          </View>
          <View style={styles.addressContainer}>
            <TextC
              T={'Add Address'}
              fs={SIZES.M}
              style={{alignSelf: 'center', marginVertical: SIZES.marign}}
            />
            <View style={styles.flexDirection}>
              <TextInputC
                onChangeTextInput={setName}
                lable={'Name'}
                placeholder={'Enter Your Name'}
              />
            </View>
            <View style={styles.flexDirection}>
              <TextInputC
                onChangeTextInput={setAddress}
                lable={'Address'}
                placeholder={'Enter Your Full Adress'}
              />
            </View>
            <View style={styles.flexDirection}>
              <TextInputC
                onChangeTextInput={setCity}
                lable={'City'}
                placeholder={'Enter Your City'}
              />
              <TextInputC
                onChangeTextInput={setPinCode}
                lable={'Area Pincode'}
                placeholder={'Enter Your Area Code'}
              />
            </View>
            <View style={styles.flexDirection}>
              <TextInputC
                onChangeTextInput={setPhoneNumber}
                lable={'Phone Number'}
                placeholder={'Enter Your Phone Number'}
              />
              <TextInputC
                onChangeTextInput={setState}
                lable={'State'}
                placeholder={'Enter Your State'}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.confirmButtonContainer}>
        <TouchableOpacity
          style={styles.confirmButtonStyle}
          onPress={() => {
            confirnOrder();
          }}>
          <TextC fc={COLORS.white} fs={SIZES.M} T={'Confirm Order'} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    padding: SIZES.padding,
    backgroundColor: COLORS.primary,
  },
  addressContainer: {
    flex: 1,
    marginHorizontal: SIZES.marign,
  },
  flexDirection: {
    marginVertical: SIZES.marign,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  confirmButtonContainer: {
    alignSelf: 'center',
  },
  confirmButtonStyle: {
    backgroundColor: COLORS.primary,
    width: SIZES.width / 1.2,
    alignItems: 'center',
    padding: SIZES.padding,
    borderRadius: SIZES.radious,
  },
});
