import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {styles} from './styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import SettingSvg from '../../assets/svg/settings';
import PaintSvg from '../../assets/svg/paint';
import {SCREEN} from '../../constants/screens';
import Footer from '../../components/footer';
import FastImage from 'react-native-fast-image';
import SettingModal from '../../components/settingModal';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
  const navigation: any = useNavigation();
  const route = useRoute();
  const [modalVisible, setModalVisible] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [screenTitle, setScreenTitle] = useState('');

  useEffect(() => {
    const loadLevel = async () => {
      try {
        const savedLevel = await AsyncStorage.getItem('currentLevel');
        if (savedLevel !== null) {
          setCurrentLevel(parseInt(savedLevel, 10));
        }
      } catch (error) {
        console.error('Failed to load level:', error);
        ToastAndroid.show('Failed to load level', ToastAndroid.SHORT);
      }
    };
    loadLevel();
  }, []);

  useEffect(() => {
    console.log('Current screen name:', route.name);
    setScreenTitle(route.name);
  }, [route]);

  console.log(screenTitle);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#0C1324'} />
      <View style={styles.backgroundContainer}>
        <FastImage
          style={styles.backgroundImage}
          source={require('../../assets/images/3.gif')}
          resizeMode={FastImage.resizeMode.contain}
        />
        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setModalVisible(true)}
            style={styles.iconContainer}>
            <SettingSvg width="23" height="23" />
          </TouchableOpacity>
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
          <FastImage
            source={require('../../assets/images/button.gif')}
            resizeMode="cover"
            style={styles.button}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate(SCREEN.LEVEL)}>
              <Text style={styles.title}>Level {currentLevel}</Text>
            </TouchableOpacity>
          </FastImage>
        </View>
        <SettingModal
          screenTitle={screenTitle}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        <Footer />
      </View>
    </SafeAreaView>
  );
};

export default Home;
