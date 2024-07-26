import {StyleSheet} from 'react-native';
import {THEME} from '../../theme';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: hp(7),
    backgroundColor: THEME.GRAY,
    bottom: 0,
    marginBottom: 0,
    position: 'absolute',
  },
});
