import React, {memo} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Style from './style';

const MapScreen = ({children, ...props}) => {
  return (
    <MapView provider={PROVIDER_GOOGLE} style={Style.mapStyle} {...props}>
      {children}
    </MapView>
  );
};
export default memo(MapScreen);
