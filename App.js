import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import MapScreen from './src/screens/MapScreen';
import Style from './src/screens/MapScreen/style';
import store from './src/store';

const App = () => (
  <Provider store={store}>
    <SafeAreaView style={Style.parentContainer}>
      <MapScreen />
    </SafeAreaView>
  </Provider>
);

export default App;
