import {Dimensions, PixelRatio} from 'react-native';

const {height: screenHeight, width: screenWidth} = Dimensions.get('screen');

const widthToDP = width => {
  const elemWidth = typeof width === 'number' ? width : parseFloat(width);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

const heightToDP = height => {
  const elemHeight = typeof height === 'number' ? height : parseFloat(height);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

export {widthToDP, heightToDP};
