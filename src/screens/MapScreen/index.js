import React, {useState, createRef} from 'react';
import {View, Text} from 'react-native';
import {Marker} from 'react-native-maps';
import MapView from '../../components/MapView';
import Style from './style';
import {LATITUDE, LONGITUDE, MARKER_DELTA} from '../../utils/constants';
import SearchBar from '../../components/SearchBar';

const searchBarRef = createRef();

const MapScreen = () => {
  const [marker, changeMarker] = useState({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    ...MARKER_DELTA,
  });
  const onChangeInputValue = input => {
    // searchPlaces(input);
  };
  const onSelectedPlace = item => {
    const {lat: latitude, lng: longitude} = item.geometry.location;
    // clearPlaces();
    // autoCompleteInputRef.current.clear();
    // changeMarker({latitude, longitude, ...latLngDelta});
  };
  return (
    <View style={Style.mapStyle}>
      <MapView region={marker}>
        <Marker coordinate={marker} />
      </MapView>
      <SearchBar
        ref={searchBarRef}
        customContainerStyle={Style.autoCompleteInput}
        onChangeText={onChangeInputValue}
        // listData={placesData}
        // loading={isLoading}
        onPressListItem={onSelectedPlace}
      />
    </View>
  );
};
export default MapScreen;
