import {StyleSheet} from 'react-native';
import {THEME} from '../../theme';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tubeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60 / 2,
    backgroundColor: THEME.BLUE,
    marginHorizontal: wp(5),
    flexDirection: 'row',
  },
});
