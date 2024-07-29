import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {THEME} from '../../theme';
import SettingSvg from '../../assets/svg/settings';
import PaintSvg from '../../assets/svg/paint';
import {SCREEN} from '../../constants/screens';
import Footer from '../../components/footer';
import FastImage from 'react-native-fast-image';

const Home = () => {
  const navigation: any = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#0C1324'} />
      <View style={styles.backgroundContainer}>
        <FastImage
          style={styles.backgroundImage}
          source={require('../../assets/images/logos.gif')}
          resizeMode={FastImage.resizeMode.contain}
        />
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <SettingSvg width="23" height="23" />
          </View>
          <View style={styles.iconContainer}>
            <PaintSvg width="18" height="18" />
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../assets/images/ads.png')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate(SCREEN.LEVEL)}
            activeOpacity={0.5}
            style={styles.button}>
            <Text style={styles.title}>Level 4</Text>
          </TouchableOpacity>
        </View>
        <Footer />
      </View>
    </SafeAreaView>
  );
};

export default Home;
