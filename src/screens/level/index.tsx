import {
  Button,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {THEME} from '../../theme';
import SettingSvg from '../../assets/svg/settings';
import ResetSvg from '../../assets/svg/reset';
import BackSvg from '../../assets/svg/back';
import Footer from '../../components/footer';
import Ball from '../../components/ball';
import Container from '../../components/container';

const Level = () => {
  const navigation: any = useNavigation();
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
        <View style={styles.iconContainer}>
          <ResetSvg width="25" height="25" />
        </View>
      </View>
      <View style={styles.row}>
        <Container />
        <Container />
        <Container />
        <Container />
        <Container />
      </View>
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
