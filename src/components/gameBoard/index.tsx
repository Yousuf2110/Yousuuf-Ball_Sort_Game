import React, {useState, useEffect} from 'react';
import {View, ToastAndroid, TouchableOpacity} from 'react-native';
import Tube from '../tube';
import {styles} from './styles';
import Ball from '../ball';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {SCREEN} from '../../constants/screens';

type TubeColor = string;
type TubeType = TubeColor[];
type TubesState = TubeType[];

interface GameBoardProps {
  levelConfig: {
    tubes: number;
    colors: number;
    colorSet: string[];
  };
  onWin: () => void;
}

const shuffleArray = (array: any) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const generateInitialState = (colors: string[], tubes: number): TubesState => {
  const initialState: TubesState = [];
  const ballsPerTube = 4;

  const allBalls = colors.flatMap(color => Array(ballsPerTube).fill(color));

  const shuffledBalls = shuffleArray(allBalls);

  for (let i = 0; i < tubes; i++) {
    const start = i * ballsPerTube;
    const end = start + ballsPerTube;
    initialState.push(shuffledBalls.slice(start, end));
  }

  return initialState;
};

const GameBoard: React.FC<GameBoardProps> = ({levelConfig, onWin}) => {
  const [tubes, setTubes] = useState<TubesState>(
    generateInitialState(levelConfig.colorSet, levelConfig.tubes),
  );
  const [selectedTube, setSelectedTube] = useState<number | null>(null);
  const [history, setHistory] = useState<TubesState[]>([]);

  useEffect(() => {
    setTubes(generateInitialState(levelConfig.colorSet, levelConfig.tubes));
  }, [levelConfig]);

  const handleTubePress = (index: number) => {
    if (selectedTube === null) {
      if (tubes[index].length > 0) {
        setSelectedTube(index);
      } else {
        ToastAndroid.show('Select a non-empty tube!', ToastAndroid.SHORT);
      }
    } else {
      if (index !== selectedTube) {
        moveBall(selectedTube, index);
      }
      setSelectedTube(null);
    }
  };

  const moveBall = (fromIndex: number, toIndex: number) => {
    const newTubes = [...tubes];
    const fromTube = newTubes[fromIndex];
    const toTube = newTubes[toIndex];

    if (fromTube.length > 0) {
      const colorToMove = fromTube[0];
      const ballsToMove: TubeColor[] = [];
      while (fromTube.length > 0 && fromTube[0] === colorToMove) {
        ballsToMove.push(fromTube.shift()!);
      }
      if (toTube.length + ballsToMove.length <= 4) {
        if (toTube.length === 0 || toTube[0] === colorToMove) {
          toTube.unshift(...ballsToMove);
          setTubes(newTubes);
          checkWinCondition(newTubes);
        } else {
          fromTube.unshift(...ballsToMove);
          ToastAndroid.show(
            'Invalid move: Ball color does not match!',
            ToastAndroid.SHORT,
          );
        }
      } else {
        fromTube.unshift(...ballsToMove);
        ToastAndroid.show(
          'Invalid move: Tube capacity exceeded!',
          ToastAndroid.SHORT,
        );
      }
    } else {
      ToastAndroid.show('Invalid move!', ToastAndroid.SHORT);
    }
  };

  const checkWinCondition = (currentTubes: TubesState) => {
    const isCompleteTube = (tube: TubeType) =>
      tube.length === 4 && tube.every(ball => ball === tube[0]);
    const filledTubesCount = currentTubes.filter(isCompleteTube).length;
    if (filledTubesCount >= 4) {
      ToastAndroid.show('You Win!', ToastAndroid.SHORT);
      onWin();
    }
  };

  const getTopBallColor = (index: number) => {
    return tubes[index].length > 0 ? tubes[index][0] : 'white';
  };

  return (
    <View style={styles.container}>
      <View style={styles.tubeContainer}>
        {tubes.map((balls, index) => (
          <View
            key={index}
            style={{
              height: heightPercentageToDP(30),
              justifyContent: 'flex-end',
            }}>
            {selectedTube === index && (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Ball color={getTopBallColor(selectedTube)} />
              </View>
            )}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => handleTubePress(index)}>
              <Tube
                key={index}
                balls={balls}
                onPress={() => handleTubePress(index)}
                selected={index === selectedTube}
                hideTopBall={index === selectedTube}
              />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

export default GameBoard;
