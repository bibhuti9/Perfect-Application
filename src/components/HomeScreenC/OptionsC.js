import {View} from 'react-native';
import React from 'react';
import {question, repeate} from '../../themes/icon';
import TwoViewC from '../commonComponents/TwoViewC';
import {COLORS} from '../../themes/colors';
export default function OptionsC() {
  const options = [
    {
      iconNmae: repeate,
      text: 'Repeate last order',
    },
    {
      iconNmae: question,
      text: 'Help me chooice',
    },
  ];
  const RenderItem = ({item}) => {
    return <TwoViewC leftImage={item.iconNmae} text={item.text} />;
  };
  return (
    <View style={{backgroundColor: COLORS.white}}>
      {options.map((value, index) => (
        <RenderItem key={String(index)} item={value} />
      ))}
    </View>
  );
}
