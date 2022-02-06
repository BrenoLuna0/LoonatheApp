import React, {useState} from 'react';

import SplashVideo from './src/components/SplashVideo';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes/app.routes';

const App = () => {
  const [endSplashVideo, setEndSplahsVideo] = useState(false);

  return (
    <NavigationContainer>
      {!endSplashVideo ? (
        <SplashVideo closeSplashVideo={() => setEndSplahsVideo(true)} />
      ) : (
        <Routes />
      )}
    </NavigationContainer>
  );
};

export default App;
