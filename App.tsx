import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LogBox} from 'react-native';

import MainStack from './src/stacks/mainStack';

const App = () => {
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  ]);

  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default App;
