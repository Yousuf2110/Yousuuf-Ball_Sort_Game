import React from 'react';
import Svg, {Path} from 'react-native-svg';

const VolumeSvg = () => (
  <Svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="volumeQuietIconTitle"
    stroke="#fff"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    color="#000000">
    <Path d="M13 5v14l-5-4H3V9h5z" />
    <Path strokeLinecap="round" d="M13 14c1.5-1 1.5-3 0-4" />
    <Path d="M16,16 C18.0858253,13.9141747 18.0858253,10.0858253 16,8" />
  </Svg>
);

export default VolumeSvg;
