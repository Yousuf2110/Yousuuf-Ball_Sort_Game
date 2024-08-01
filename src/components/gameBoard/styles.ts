import {StyleSheet} from 'react-native';
import {THEME} from '../../theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
  footer: {
    position: 'absolute',
    bottom: 0,
    marginBottom: hp(7.5),
    left: wp(5),
    width: '50%',
    alignItems: 'flex-end',
  },
  button: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60 / 2,
    backgroundColor: THEME.BLUE,
    right: wp(8),
    flexDirection: 'row',
  },
});
