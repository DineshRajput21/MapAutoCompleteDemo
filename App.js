import React from 'react';
import {SafeAreaView} from 'react-native';
import MapScreen from './src/screens/MapScreen';
import Style from './src/screens/MapScreen/style';

const App = () => (
  <SafeAreaView style={Style.parentContainer}>
    <MapScreen />
  </SafeAreaView>
);

export default App;
