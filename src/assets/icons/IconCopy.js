import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

const IconCopy = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Rect
        x="5"
        y="5.5"
        width="11.5"
        height="14.5"
        rx="2"
        stroke="#EB6C49"
        strokeWidth="2"
      />
      <Path
        d="M8 2C8 2 14.5 2.00001 16.5 2C18.5 2 20 3.73534 20 6C20 8.26467 20 16.5 20 16.5"
        stroke="#EB6C49"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default IconCopy;
