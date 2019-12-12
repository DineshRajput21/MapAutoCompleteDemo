import React, {memo, forwardRef} from 'react';
import {
  View,
  ViewPropTypes,
  ActivityIndicator,
  TextInput,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import Style from './style';
import VectorIcon from '../VectorIcon';

const SearchBar = forwardRef((props, inputRef) => {
  const {
    customContainerStyle,
    customInputStyle,
    placeholder,
    listData,
    loading,
    onPressListItem,
    ...pendingProps
  } = props;

  const renderItems = ({item}) => (
    <TouchableOpacity
      style={Style.listItem}
      onPress={() => onPressListItem(item)}>
      <Text style={Style.placeTxt} numberOfLines={1}>
        {item.formatted_address}
      </Text>
    </TouchableOpacity>
  );
  const onCrossPress = () => {
    inputRef.current.clear();
  };

  return (
    <View style={[customContainerStyle, Style.inputBox]}>
      <View style={Style.searchContainer}>
        <VectorIcon onPress={onCrossPress} size={20} icon={'search'} />
        <TextInput
          ref={inputRef}
          style={[Style.input, Style.cardStyle, customInputStyle]}
          placeholder={placeholder}
          placeholderTextColor={'grey'}
          {...pendingProps}
        />
        <VectorIcon onPress={onCrossPress} size={25} icon={'close'} />
      </View>
      <View style={Style.loadingCloseContainer}>
        <ActivityIndicator animating={loading} size={20} />
      </View>
      <FlatList
        style={[Style.listContainer, Style.cardStyle]}
        showsVerticalScrollIndicator={false}
        bounces={false}
        data={listData}
        renderItem={renderItems}
      />
    </View>
  );
});

SearchBar.propTypes = {
  customContainerStyle: ViewPropTypes.style,
  customInputStyle: PropTypes.object,
  listData: PropTypes.array,
  loading: PropTypes.bool,
  onPressListItem: PropTypes.func,
};

SearchBar.defaultProps = {
  customInputStyle: Style.defaultInput,
  listData: [],
  loading: false,
  onPressListItem: () => {},
  placeholder: 'Search...',
};

export default memo(SearchBar);
