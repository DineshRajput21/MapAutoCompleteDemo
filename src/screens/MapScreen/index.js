import React, {useState, createRef} from 'react';
import {View, Text} from 'react-native';
import {Marker} from 'react-native-maps';
import {connect} from 'react-redux';
import MapView from '../../components/MapView';
import Style from './style';
import {LATITUDE, LONGITUDE, MARKER_DELTA} from '../../utils/constants';
import SearchBar from '../../components/SearchBar';
import {fetchPlaces, clearPlacesList} from './actions';

const searchBarRef = createRef();

const MapScreen = ({
  searchPlaces,
  clearPlaces,
  placesData,
  errorMsg,
  isLoading,
}) => {
  const [marker, changeMarker] = useState({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    ...MARKER_DELTA,
  });

  const onChangeInputValue = input => {
    searchPlaces(input);
  };
  const onSelectedPlace = item => {
    const {lat: latitude, lng: longitude} = item.geometry.location;
    clearPlaces();
    searchBarRef.current.clear();
    changeMarker({latitude, longitude, ...MARKER_DELTA});
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
        listData={placesData}
        loading={isLoading}
        onPressListItem={onSelectedPlace}
      />
      <Text style={Style.errText}>{errorMsg}</Text>
    </View>
  );
};
const mapStateToProps = ({mapScreenReducer}) => ({
  placesData: mapScreenReducer.placesData,
  errorMsg: mapScreenReducer.errorMsg,
  isLoading: mapScreenReducer.isLoading,
});

const mapDispatchToProps = dispatch => ({
  searchPlaces: query => dispatch(fetchPlaces(query)),
  clearPlaces: () => dispatch(clearPlacesList()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MapScreen);
