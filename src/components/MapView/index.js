import React, {memo} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Style from './style';

const Mapview = () => (
  <MapView provider={PROVIDER_GOOGLE} style={Style.container} />
);

export default memo(Mapview);
