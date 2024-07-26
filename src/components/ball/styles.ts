import {StyleSheet} from 'react-native';
import {THEME} from '../../theme';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  ball: {
    width: 38,
    height: 38,
    borderRadius: 38 / 2,
    marginVertical: hp(0.2),
  },
});
