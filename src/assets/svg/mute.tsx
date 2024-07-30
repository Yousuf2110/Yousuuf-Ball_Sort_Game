import React from 'react';
import Svg, {Path} from 'react-native-svg';

const MuteSvg = () => (
  <Svg
    fill="#000000"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    id="mute-3"
    data-name="Flat Color"
    xmlns="http://www.w3.org/2000/svg"
    className="icon flat-color">
    <Path
      id="primary"
      d="M16.41,2.19a1,1,0,0,1,1-.08A1,1,0,0,1,18,3v9.93L9.89,7ZM4,9v6a2,2,0,0,0,2,2H9.84l6.57,4.81a1,1,0,0,0,1,.08A1,1,0,0,0,18,21V14.19L8.25,7H6a2,2,0,0,0-.85.19A2,2,0,0,0,4,9Z"
      fill="#fff"
    />
    <Path
      id="secondary"
      d="M2.41,5.17l2.74,2L18,16.65l2.41,1.78a.94.94,0,0,0,.59.2,1,1,0,0,0,.59-1.8L18,14.19,8.25,7,3.59,3.57a1,1,0,0,0-1.18,1.6Z"
      fill="red"
    />
  </Svg>
);

export default MuteSvg;
