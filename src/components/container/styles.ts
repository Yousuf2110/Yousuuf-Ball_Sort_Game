import {StyleSheet} from 'react-native';
import {THEME} from '../../theme';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    width: 45,
    height: hp(25),
    borderWidth: 1,
    borderColor: THEME.WHITE,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    marginHorizontal: wp(3),
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
