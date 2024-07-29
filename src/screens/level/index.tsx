import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {THEME} from '../../theme';
import SettingSvg from '../../assets/svg/settings';
import ResetSvg from '../../assets/svg/reset';
import BackSvg from '../../assets/svg/back';
import GameBoard from '../../components/gameBoard';
import Footer from '../../components/footer';

const Level = () => {
  const navigation: any = useNavigation();

  const shuffleArray = (array: any) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const generateInitialState = () => {
    const colors = [THEME.RED, THEME.BLUE, THEME.GREEN, THEME.YELLOW];

    return [
      shuffleArray([...colors]),
      shuffleArray([...colors]),
      shuffleArray([...colors]),
      shuffleArray([...colors]),
      [],
      [],
    ];
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={THEME.BACKGROUND} />
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <SettingSvg width="23" height="23" />
        </View>
        <View style={styles.levelContainer}>
          <Text style={styles.title}>Level</Text>
          <Text style={styles.subTitle}>4</Text>
        </View>
        <TouchableOpacity
          onPress={() => generateInitialState()}
          style={styles.iconContainer}>
          <ResetSvg width="25" height="25" />
        </TouchableOpacity>
      </View>
      <GameBoard />
      <View style={styles.footer}>
        <View style={styles.button}>
          <BackSvg width="23" height="23" />
          <Text style={styles.number}>4</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.number}>+</Text>
          <View style={styles.testTube}></View>
          <Text style={styles.number}>4</Text>
        </View>
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default Level;
