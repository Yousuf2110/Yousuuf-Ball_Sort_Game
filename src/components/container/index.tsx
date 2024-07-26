import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Ball from '../ball';
import {THEME} from '../../theme';

const Container = () => {
  return (
    <View style={styles.container}>
      <Ball color={THEME.GRAY} />
      <Ball color={THEME.RED} />
      <Ball color={THEME.BLUE} />
      <Ball color={THEME.GREEN} />
    </View>
  );
};

export default Container;
