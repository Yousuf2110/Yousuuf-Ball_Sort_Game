import React from 'react';
import {TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Ball from '../ball';

interface TubeProps {
  balls: string[];
  onPress: () => void;
  selected: boolean; // Add selected prop
}

const Tube: React.FC<TubeProps> = ({balls, onPress, selected}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.tube,
        selected && styles.selectedTube, // Apply selected style if tube is selected
      ]}
      onPress={onPress}>
      {balls.map((color: any, index: any) => (
        <Ball key={index} color={color} />
      ))}
    </TouchableOpacity>
  );
};

export default Tube;
