import {StyleSheet} from 'react-native';
import {THEME} from '../../theme';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C1324',
  },
  header: {
    height: hp(7),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(3),
  },
  iconContainer: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: '100%',
    paddingHorizontal: wp(3.5),
    marginVertical: hp(1),
  },
  logoImageContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp(2),
  },
  logoImage: {
    height: 250,
    width: 250,
    marginTop: hp(8),
  },
  image: {
    height: 38,
    width: 38,
    borderRadius: 40 / 2,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: hp(12),
    bottom: 0,
    marginBottom: 200,
    position: 'absolute',
  },
  button: {
    paddingVertical: wp(3.7),
    paddingHorizontal: wp(15),
    backgroundColor: THEME.GREEN,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 32,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFPercentage(3.3),
    color: THEME.WHITE,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject, // This ensures the GIF covers the whole screen
    width: '100%',
    height: '100%',
  },
  backgroundContainer: {
    flex: 1,
  },
});
