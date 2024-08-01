import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Ball from '../ball';
import {styles} from './styles';

type TubeProps = {
  balls: string[];
  onPress: () => void;
  hideTopBall?: boolean;
};

const Tube: React.FC<TubeProps> = ({balls, onPress, hideTopBall}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <View style={styles.tube}>
        {balls.map((ball, index) => {
          if (hideTopBall && index === 0) {
            return null;
          }
          return <Ball key={index} color={ball} />;
        })}
      </View>
    </TouchableOpacity>
  );
};

export default Tube;
