import React, {useState} from 'react';
import {View, ToastAndroid} from 'react-native';
import Tube from '../tube';
import {styles} from './styles';

type TubeColor = 'red' | 'blue' | 'green' | 'yellow';

type TubeType = TubeColor[];

type TubesState = TubeType[];

const generateInitialState = (): TubesState => {
  return [
    ['red', 'blue', 'green', 'yellow'],
    ['yellow', 'red', 'blue', 'green'],
    ['green', 'yellow', 'red', 'blue'],
    ['blue', 'green', 'yellow', 'red'],
    [],
    [],
  ];
};

const GameBoard: React.FC = () => {
  const [tubes, setTubes] = useState<TubesState>(generateInitialState);
  const [selectedTube, setSelectedTube] = useState<number | null>(null);

  const handleTubePress = (index: number) => {
    if (selectedTube === null) {
      setSelectedTube(index);
    } else {
      moveBall(selectedTube, index);
      setSelectedTube(null);
    }
  };

  const moveBall = (fromIndex: number, toIndex: number) => {
    const newTubes = [...tubes];
    const fromTube = newTubes[fromIndex];
    const toTube = newTubes[toIndex];

    if (fromTube.length > 0 && toTube.length < 4) {
      const colorToMove = fromTube[0];
      const ballsToMove: TubeColor[] = [];

      while (fromTube.length > 0 && fromTube[0] === colorToMove) {
        ballsToMove.push(fromTube.shift()!);
      }

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
      ToastAndroid.show('Invalid move!', ToastAndroid.SHORT);
    }
  };

  const checkWinCondition = (currentTubes: TubesState) => {
    const isCompleteTube = (tube: TubeType) =>
      tube.length === 4 && tube.every(ball => ball === tube[0]);
    const filledTubesCount = currentTubes
      .slice(0, 6)
      .filter(isCompleteTube).length;
    const lastTwoTubesEmpty = currentTubes
      .slice(4)
      .every(tube => tube.length === 0);
    if (filledTubesCount >= 4 || lastTwoTubesEmpty) {
      ToastAndroid.show('You Win!', ToastAndroid.SHORT);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tubeContainer}>
        {tubes.map((balls, index) => (
          <Tube
            key={index}
            balls={balls}
            onPress={() => handleTubePress(index)}
          />
        ))}
      </View>
    </View>
  );
};

export default GameBoard;
