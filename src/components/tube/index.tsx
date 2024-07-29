import React from 'react';
import {TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Ball from '../ball';

interface TubeProps {
  balls: string[];
  onPress: () => void;
}

const Tube: React.FC<TubeProps> = ({balls, onPress}) => {
  return (
    <TouchableOpacity style={styles.tube} onPress={onPress}>
      {balls.map((color: any, index: any) => (
        <Ball key={index} color={color} />
      ))}
    </TouchableOpacity>
  );
};

export default Tube;
