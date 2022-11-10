import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
export const COLORS = {
  primary: '#1f1f1f',
  secondary: '#cf0',

  gray1: '#919194',
  gray2: '#9d9da3',
  gray3: '#ebebed',
  screenColor: '#f1f1f3',

  black: '#000',
  white: '#fff',
};
export const SIZES = {
  L: 30,
  M: 20,
  S: 18,
  SM: 15,
  width,
  height,
  padding: 10,
  marign: 10,
  radious: 10,
  weight1: 'bold',
  weight2: '800',
  weight3: '500',
};
export const commonStyle = {
  iconStyle: {
    width: 25,
    height: 25,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 6,
  },
};
