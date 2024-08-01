import {StyleSheet} from 'react-native';
import {THEME} from '../../theme';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.BACKGROUND,
  },
  header: {
    height: hp(7),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(3.5),
    alignItems: 'center',
  },
  iconContainer: {
    width: hp(5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hp(5),
    height: hp(5),
    backgroundColor: THEME.BLUE,
  },
  levelContainer: {
    width: hp(15),
    alignItems: 'center',
    borderRadius: hp(5),
    height: hp(5.5),
    backgroundColor: THEME.DARK_GRAY,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFPercentage(2.3),
    color: THEME.LIGHT_GRAY,
  },
  subTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFPercentage(2.3),
    color: THEME.WHITE,
    bottom: hp(0.7),
  },
  number: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFPercentage(4),
    color: THEME.WHITE,
    marginLeft: hp(0.5),
  },
  testTube: {
    width: 8,
    height: hp(3),
    borderWidth: 1,
    borderColor: THEME.WHITE,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    backgroundColor: THEME.WHITE,
  },
  footer: {
    width: '50%',
    height: hp(7),
    bottom: 0,
    marginBottom: hp(8.4),
    position: 'absolute',
    alignItems: 'flex-start',
    alignSelf: 'flex-end',
  },
  button: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60 / 2,
    backgroundColor: THEME.BLUE,
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: wp(5),
    justifyContent: 'center',
    marginVertical: hp(25),
  },
});
