import React from 'react';
import Lottie from 'lottie-react';

const AnimatedLottie = ({ animationData, className, loop = true, style }) => {
  return (
    <Lottie animationData={animationData} loop={loop} className={className} style={style} />
  );
};

export default AnimatedLottie;
