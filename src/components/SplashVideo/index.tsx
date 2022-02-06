import React from 'react';

import * as S from './styles';

type SplashVideoProps = {
  closeSplashVideo: () => void;
};

const SplashVideo: React.FC<SplashVideoProps> = ({closeSplashVideo}) => {
  return (
    <S.VideoContainer
      source={require('../../../assets/videos/loona_intro_final.mp4')}
      paused={false}
      repeat={false}
      resizeMode={'cover'}
      muted={true}
      onEnd={() => closeSplashVideo()}
    />
  );
};

export default SplashVideo;
