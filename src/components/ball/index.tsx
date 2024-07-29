import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';

interface BallProps {
  color: string;
}

const Ball: React.FC<BallProps> = ({color}: any) => {
  return <View style={[styles.ball, {backgroundColor: color}]} />;
};

export default Ball;
