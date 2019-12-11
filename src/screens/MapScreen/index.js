import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Marker} from 'react-native-maps';
import MapView from '../../components/MapView';
import Style from './style';
import {LATITUDE, LONGITUDE, MARKER_DELTA} from '../../utils/constants';

const MapScreen = () => {
  const [marker, changeMarker] = useState({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    ...MARKER_DELTA,
  });
  return (
    <View style={Style.container}>
      <MapView region={marker}>
        <Marker coordinate={marker} />
      </MapView>
    </View>
  );
};
export default MapScreen;
