import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {THEME} from '../../theme';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: THEME.WHITE,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: hp(46),
  },
  header: {
    width: '100%',
    height: hp(6),
    backgroundColor: '#2C85FB',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    flexDirection: 'row',
  },
  wrapper: {
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFPercentage(3.3),
    color: THEME.WHITE,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5,
    marginLeft: hp(3.5),
  },
  iconContainer: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCover: {
    height: 30,
    width: 30,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.RED,
  },
  contentContainer: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(1),
    backgroundColor: '#F3E6D3',
    marginTop: hp(1),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  buttonsRow: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCircle: {
    height: 45,
    width: 45,
    borderRadius: 45,
    backgroundColor: '#3ECBF2',
    marginHorizontal: hp(1.6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    flexDirection: 'row',
    width: '94.5%',
    backgroundColor: '#ECDEC4',
    alignItems: 'center',
    alignSelf: 'center',
    height: hp(6),
  },
  iconColumn: {
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    width: '70%',
    justifyContent: 'center',
  },
  label: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: RFPercentage(3),
    color: '#8C715C',
    marginTop: hp(0.3),
  },
  terms: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: RFPercentage(1.5),
    color: THEME.BLUE,
    marginTop: hp(0.5),
    textDecorationLine: 'underline',
  },
  dotCom: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: RFPercentage(1.2),
    color: THEME.LIGHT_GRAY,
    marginBottom: hp(1),
  },
});
