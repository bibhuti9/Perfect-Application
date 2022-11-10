import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import HeaderCartComponentC from '../components/commonComponents/HeaderCartC';
import {COLORS, commonStyle, SIZES} from '../themes/colors';
import {useNavigation} from '@react-navigation/native';
import {call, chat, leftArrow} from '../themes/icon';
import GoogleMapScreen from './GoogleMapScreen';
import TextC from '../components/commonComponents/TextC';
import BottomSheetC from '../components/commonComponents/BottomSheetC';
import SeperatorC from '../components/commonComponents/SeperatorC';
import {updateOrderStatus} from '../api/fetch_api';
import StepIndicator from 'react-native-step-indicator';

export default function TrackOrderWithMapScreen({route}) {
  const navigation = useNavigation();
  const [item, setItem] = useState(route.params.item);

  const OrderStatus = ({item}) => {
    const [currentPosition, setCurrentPossition] = useState(
      item.orderStatus.length,
    );
    const labels = [
      `Order Confirmed \n `,
      'Shipped',
      'Out For Delivery',
      'Delivered',
    ];
    const customStyles = {
      stepIndicatorSize: 30,
      currentStepIndicatorSize: 30,
      separatorStrokeWidth: 2,
      currentStepStrokeWidth: 3,
      stepStrokeCurrentColor: COLORS.secondary,
      stepStrokeWidth: 3,
      stepStrokeFinishedColor: COLORS.secondary,
      stepStrokeUnFinishedColor: '#aaaaaa',
      separatorFinishedColor: COLORS.secondary,
      separatorUnFinishedColor: '#aaaaaa',
      stepIndicatorFinishedColor: COLORS.primary,
      stepIndicatorUnFinishedColor: '#ffffff',
      stepIndicatorCurrentColor: '#ffffff',
      stepIndicatorLabelFontSize: 13,
      currentStepIndicatorLabelFontSize: 13,
      stepIndicatorLabelCurrentColor: '#fe7013',
      stepIndicatorLabelFinishedColor: COLORS.white,
      stepIndicatorLabelUnFinishedColor: '#aaaaaa',
      labelColor: COLORS.gray1,
      labelSize: SIZES.SM,
      currentStepLabelColor: COLORS.secondary,
    };

    return (
      <View style={{flex: 1, marginVertical: SIZES.marign + 10}}>
        <StepIndicator
          customStyles={customStyles}
          currentPosition={currentPosition}
          labels={labels}
          stepCount={labels.length}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerAndSearchAndOptionContainer}>
        <HeaderCartComponentC
          leftIcon={leftArrow}
          leftIconPress={() => navigation.goBack()}
        />
      </View>
      <GoogleMapScreen
        origin={{latitude: item.latitude, longitude: item.longitude}}
        destination={{
          latitude: item.restuarents.rlatitude,
          longitude: item.restuarents.rlongitude,
        }}
      />
      <BottomSheetC styles={{backgroundColor: COLORS.primary}}>
        <View style={styles.bottomContainer}>
          <TextC
            fc={COLORS.gray2}
            T={'Your Order Is Already On Its Way To You'}
            style={{alignSelf: 'center', marginVertical: SIZES.marign}}
          />
          <SeperatorC color={COLORS.gray2} />
          <View style={styles.sellerContainer}>
            <View style={styles.sellerInfoStyle}>
              <Image
                source={{uri: item.restuarents.rimages[0]}}
                style={styles.imageStyle}
              />
              <View style={{flex: 1, marginHorizontal: SIZES.marign}}>
                <TextC
                  T={item.restuarents.rname}
                  fc={COLORS.white}
                  fs={SIZES.M}
                />
                <TextC T={'Curior'} fc={COLORS.gray2} />
              </View>
            </View>
            <View style={styles.sellerButtonContainer}>
              <TouchableOpacity
                style={styles.sellerButton}
                onPress={() => {
                  updateOrderStatus().then(result => {
                    console.log(result);
                  });
                }}>
                <Image source={call} style={commonStyle.iconStyle} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.sellerButton}>
                <Image source={chat} style={commonStyle.iconStyle} />
              </TouchableOpacity>
            </View>
          </View>
          <SeperatorC color={COLORS.gray2} />
          <OrderStatus item={item} />
        </View>
      </BottomSheetC>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerAndSearchAndOptionContainer: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SIZES.padding,
    paddingBottom: SIZES.marign + 10,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: SIZES.padding,
  },
  sellerContainer: {
    flexDirection: 'row',
    marginVertical: SIZES.marign + 10,
    alignItems: 'center',
  },
  sellerInfoStyle: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  sellerButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  sellerButton: {
    backgroundColor: COLORS.white,
    borderRadius: 50,
    padding: SIZES.padding,
  },
});
