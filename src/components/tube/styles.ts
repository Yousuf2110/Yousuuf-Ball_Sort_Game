import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {THEME} from '../../theme';

export const styles = StyleSheet.create({
  tube: {
    width: 40,
    height: hp(25),
    borderWidth: 1,
    borderColor: THEME.WHITE,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    marginHorizontal: wp(2),
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
