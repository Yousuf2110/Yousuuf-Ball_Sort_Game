import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

const Ball = ({color}: any) => {
  return <View style={[styles.ball, {backgroundColor: color}]} />;
};

export default Ball;
