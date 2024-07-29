import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';

interface BallProps {
  color: string;
}

const Ball: React.FC<BallProps> = ({color}) => {
  return <View style={[styles.ball, {backgroundColor: color}]} />;
};

export default Ball;
