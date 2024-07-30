import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import SettingSvg from '../../assets/svg/settings';
import PaintSvg from '../../assets/svg/paint';
import {SCREEN} from '../../constants/screens';
import Footer from '../../components/footer';
import FastImage from 'react-native-fast-image';
import SettingModal from '../../components/settingModal';

const Home = () => {
  const navigation: any = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

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
              <Text style={styles.title}>Play</Text>
            </TouchableOpacity>
          </FastImage>
        </View>
        <SettingModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        <Footer />
      </View>
    </SafeAreaView>
  );
};

export default Home;
