import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Tube from '../tube';
import {styles} from './styles';
import Ball from '../ball';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import BackSvg from '../../assets/svg/back';

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
  const nonEmptyTubesCount = Math.max(0, tubes - 2);

  const allBalls = colors.flatMap(color => Array(ballsPerTube).fill(color));
  const shuffledBalls = shuffleArray(allBalls);

  for (let i = 0; i < nonEmptyTubesCount; i++) {
    const start = i * ballsPerTube;
    const end = start + ballsPerTube;
    initialState.push(shuffledBalls.slice(start, end));
  }

  for (let i = 0; i < 2; i++) {
    initialState.push([]);
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
    const initialTubes = generateInitialState(
      levelConfig.colorSet,
      levelConfig.tubes,
    );
    setTubes(initialTubes);
    setHistory([initialTubes]);
  }, [levelConfig]);

  const handleTubePress = (index: number) => {
    if (selectedTube === null) {
      if (tubes[index].length > 0) {
        setSelectedTube(index);
      } else {
      }
    } else {
      if (index !== selectedTube) {
        moveBall(selectedTube, index);
      }
      setSelectedTube(null);
    }
  };

  const moveBall = (fromIndex: number, toIndex: number) => {
    const newTubes = JSON.parse(JSON.stringify(tubes));
    const fromTube = newTubes[fromIndex];
    const toTube = newTubes[toIndex];

    if (fromTube.length > 0) {
      const colorToMove = fromTube[0];
      const ballsToMove: TubeColor[] = [];
      while (fromTube.length > 0 && fromTube[0] === colorToMove) {
        ballsToMove.push(fromTube.shift()!);
      }

      const spaceAvailable = 4 - toTube.length;
      const ballsToMoveToDestination = ballsToMove.slice(0, spaceAvailable);
      const ballsToRemainInSource = ballsToMove.slice(spaceAvailable);

      if (toTube.length === 0 || toTube[0] === colorToMove) {
        setHistory(prevHistory => [
          ...prevHistory,
          JSON.parse(JSON.stringify(newTubes)),
        ]);

        toTube.unshift(...ballsToMoveToDestination);
        fromTube.unshift(...ballsToRemainInSource);
        setTubes(newTubes);
        checkWinCondition(newTubes);
      } else {
        fromTube.unshift(...ballsToMove);
      }
    }
  };

  const checkWinCondition = (currentTubes: TubesState) => {
    const isCompleteTube = (tube: TubeType) =>
      tube.length === 4 && tube.every(ball => ball === tube[0]);
    const filledTubesCount = currentTubes.filter(isCompleteTube).length;
    if (filledTubesCount >= 4) {
      onWin();
    }
  };

  const getTopBallColor = (index: number) => {
    return tubes[index].length > 0 ? tubes[index][0] : 'white';
  };

  const undoLastMove = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1);
      setHistory(newHistory);
      setTubes(JSON.parse(JSON.stringify(newHistory[newHistory.length - 1])));
    } else {
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tubeContainer}>
        {tubes.map((balls, index) => (
          <View key={index} style={styles.tubesContainer}>
            {selectedTube === index && (
              <View style={styles.ballsContainer}>
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
                hideTopBall={index === selectedTube}
              />
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={undoLastMove}
          style={styles.button}>
          <BackSvg width="23" height="23" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GameBoard;
