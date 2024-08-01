import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {THEME} from '../../theme';

export const styles = StyleSheet.create({
  tube: {
    width: 50,
    height: hp(30),
    borderWidth: 1,
    borderColor: THEME.WHITE,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginHorizontal: wp(0.8),
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
