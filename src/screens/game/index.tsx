import React, {useState, useEffect} from 'react';
import {
  BackHandler,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from './styles';
import {THEME} from '../../theme';
import SettingSvg from '../../assets/svg/settings';
import ResetSvg from '../../assets/svg/reset';
import BackSvg from '../../assets/svg/back';
import GameBoard from '../../components/gameBoard';
import Footer from '../../components/footer';
import SettingModal from '../../components/settingModal';
import {useNavigation} from '@react-navigation/native';
import {SCREEN} from '../../constants/screens';

const generateLevelConfig = (level: any) => {
  const maxTubes = 12;
  const maxColors = 4;
  const colorsList = ['red', 'blue', 'green', 'yellow'];

  const tubes = Math.min(maxTubes, Math.floor((level - 1) / 10) + 6);
  const colors = Math.min(maxColors, Math.floor((level - 1) / 5) + 4);
  const colorSet = colorsList.slice(0, colors);
  const emptyTubesCount = 2;
  const filledTubesCount = tubes - emptyTubesCount;
  const tubeConfigs = [];

  for (let i = 0; i < emptyTubesCount; i++) {
    tubeConfigs.push([]);
  }
  for (let i = 0; i < filledTubesCount; i++) {
    const colorCount = Math.floor(Math.random() * (colors - 1)) + 1;
    const tube = Array.from(
      {length: colorCount},
      () => colorSet[Math.floor(Math.random() * colors)],
    );
    tubeConfigs.push(tube);
  }

  tubeConfigs.sort(() => Math.random() - 0.5);

  return {
    level,
    tubes,
    colors,
    colorSet,
    tubeConfigs,
  };
};

const Game = () => {
  const navigation: any = useNavigation();
  const [currentLevel, setCurrentLevel] = useState(1);
  const [isGameWon, setIsGameWon] = useState(false);
  const [levelConfig, setLevelConfig] = useState(generateLevelConfig(1));
  const [modalVisible, setModalVisible] = useState(false);
  const [backPressCount, setBackPressCount] = useState(0);

  useEffect(() => {
    const backAction = () => {
      if (backPressCount === 1) {
        navigation.navigate(SCREEN.HOME);
        return true;
      } else {
        setBackPressCount(1);
        setTimeout(() => {
          setBackPressCount(0);
        }, 2000);
        return true;
      }
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [backPressCount, navigation]);

  useEffect(() => {
    const loadLevel = async () => {
      try {
        const savedLevel = await AsyncStorage.getItem('currentLevel');
        if (savedLevel !== null) {
          setCurrentLevel(parseInt(savedLevel, 10));
        }
      } catch (error) {
        console.error('Failed to load level:', error);
      }
    };

    loadLevel();
  }, []);

  useEffect(() => {
    const saveLevel = async () => {
      try {
        await AsyncStorage.setItem('currentLevel', currentLevel.toString());
      } catch (error) {
        console.error('Failed to save level:', error);
      }
    };

    saveLevel();
  }, [currentLevel]);

  useEffect(() => {
    setLevelConfig(generateLevelConfig(currentLevel));
  }, [currentLevel]);

  const handleNextLevel = () => {
    setCurrentLevel(prevLevel => prevLevel + 1);
    setIsGameWon(false);
  };

  const handlePreviousLevel = () => {
    setCurrentLevel(prevLevel => (prevLevel > 1 ? prevLevel - 1 : 1));
    setIsGameWon(false);
  };

  const handleGameWin = () => {
    setIsGameWon(true);
  };

  const addNewTube = () => {
    setLevelConfig(prevConfig => {
      if (prevConfig.tubes < 12) {
        const newTubes = prevConfig.tubes + 1;
        return {...prevConfig, tubes: newTubes};
      } else {
        return prevConfig;
      }
    });
  };

  useEffect(() => {
    if (isGameWon) {
      handleNextLevel();
    }
  }, [isGameWon]);

  const resetGame = () => {
    setLevelConfig(generateLevelConfig(currentLevel));
    setIsGameWon(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={THEME.BACKGROUND} />
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setModalVisible(true)}
          style={styles.iconContainer}>
          <SettingSvg width="23" height="23" />
        </TouchableOpacity>
        <View style={styles.levelContainer}>
          <Text style={styles.title}>Game</Text>
          <Text style={styles.subTitle}>{levelConfig.level}</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={resetGame}
          style={styles.iconContainer}>
          <ResetSvg width="25" height="25" />
        </TouchableOpacity>
      </View>
      <GameBoard onWin={handleGameWin} levelConfig={levelConfig} />
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={addNewTube}
          style={styles.button}>
          <Text style={styles.number}>+</Text>
          <View style={styles.testTube}></View>
        </TouchableOpacity>
      </View>
      <Footer />
      <SettingModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </SafeAreaView>
  );
};

export default Game;
