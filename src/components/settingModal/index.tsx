import React, {useState} from 'react';
import {View, TouchableOpacity, Modal, Text, FlatList} from 'react-native';
import {styles} from './styles';
import MuteSvg from '../../assets/svg/mute';
import CrossSvg from '../../assets/svg/cross';
import VolumeSvg from '../../assets/svg/volume';
import ArrowSvg from '../../assets/svg/rightArrow';
import VibrationSvg from '../../assets/svg/vibration';
import NoVibrationSvg from '../../assets/svg/noVibration';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SCREEN} from '../../constants/screens';

const data = [
  {id: '0', label: 'Home', icon: 'home'},
  {id: '1', label: 'Collection', icon: 'home'},
  {id: '2', label: 'Language', icon: 'world-o'},
  {id: '3', label: 'Contact Us', icon: 'headphones'},
  {id: '4', label: 'Restore Purchase', icon: 'restore'},
];

const SettingModal = ({setModalVisible, modalVisible, screenTitle}: any) => {
  const [volume, setVolume] = useState(false);
  const [vibration, setVibration] = useState(false);

  const filteredData =
    screenTitle === 'Home' ? data.filter(item => item.id !== '0') : data;

  const renderItem = ({item, index}: {item: any; index: number}) => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.menuContainer,
        {
          backgroundColor: index % 2 === 0 ? '#ECDEC4' : '#F3E6D3',
          marginBottom: index === filteredData.length - 1 ? hp(1) : 0,
          borderBottomLeftRadius: index === filteredData.length - 1 ? 10 : 0,
          borderBottomRightRadius: index === filteredData.length - 1 ? 10 : 0,
        },
      ]}>
      <View style={styles.iconColumn}>
        {item.icon === 'world-o' ? (
          <MaterialIcons size={23} color={'#8C715C'} name="language" />
        ) : item.icon === 'restore' ? (
          <MaterialIcons size={23} color={'#8C715C'} name="restore" />
        ) : (
          <FontAwesome size={23} color={'#8C715C'} name={item.icon} />
        )}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.label}>{item.label}</Text>
      </View>
      <View style={styles.iconColumn}>
        <ArrowSvg />
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View
            style={[
              styles.modalView,
              {
                height: screenTitle === SCREEN.HOME ? hp(45) : hp(52),
              },
            ]}>
            <View style={styles.header}>
              <View style={styles.wrapper}>
                <Text style={styles.title}>Setting</Text>
              </View>
              <View style={styles.iconContainer}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setModalVisible(!modalVisible)}
                  style={styles.iconCover}>
                  <CrossSvg />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.contentContainer}>
              <View style={styles.buttonsRow}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setVolume(!volume)}
                  style={styles.iconCircle}>
                  {volume ? <VolumeSvg /> : <MuteSvg />}
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setVibration(!vibration)}
                  style={styles.iconCircle}>
                  {vibration ? <NoVibrationSvg /> : <VibrationSvg />}
                </TouchableOpacity>
              </View>
            </View>
            <FlatList
              data={filteredData}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
            />
            <View style={styles.wrapper}>
              <Text style={styles.terms}>Term of service & Privacy Policy</Text>
              <Text style={styles.dotCom}>Sound from element.envato.com</Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SettingModal;
