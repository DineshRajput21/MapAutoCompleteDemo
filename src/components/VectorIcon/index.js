import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Style from './style';

const VectorIcon = ({icon, size, onPress}) => (
  <TouchableOpacity onPress={onPress} style={Style.iconStyle}>
    <Icon name={icon} size={size} color="grey" />
  </TouchableOpacity>
);

export default VectorIcon;
