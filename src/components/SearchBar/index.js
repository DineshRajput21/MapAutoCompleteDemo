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
import {styles} from './style';

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
      style={styles.listItem}
      onPress={() => onPressListItem(item)}>
      <Text style={styles.placeTxt} numberOfLines={1}>
        {item.formatted_address}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={[customContainerStyle, styles.inputBox]}>
      <TextInput
        ref={inputRef}
        style={[styles.input, styles.cardStyle, customInputStyle]}
        placeholder={placeholder}
        placeholderTextColor={'grey'}
        {...pendingProps}
      />
      <View style={styles.loadingCloseContainer}>
        <ActivityIndicator animating={loading} size={20} />
      </View>
      <FlatList
        style={[styles.listContainer, styles.cardStyle]}
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
  customInputStyle: styles.defaultInput,
  listData: [],
  loading: false,
  onPressListItem: () => {},
};

export default memo(SearchBar);
