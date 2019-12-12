import {StyleSheet} from 'react-native';
import {heightToDP as height, widthToDP as width} from '../../utils/Dimensions';

export default StyleSheet.create({
  inputBox: {
    marginHorizontal: width(2),
  },
  input: {
    height: height(6),
    flex: 1,
  },
  defaultInput: {
    fontSize: height(2),
    paddingHorizontal: width(2),
  },
  listContainer: {
    backgroundColor: 'white',
    marginTop: height(1),
    marginBottom: height(4),
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  placeTxt: {
    fontSize: height(2),
    fontWeight: '500',
    paddingVertical: height(2),
    paddingHorizontal: width(2),
  },
  loadingCloseContainer: {
    flexDirection: 'row',
    height: height(6),
    position: 'absolute',
    right: 0,
    paddingHorizontal: width(3),
    justifyContent: 'center',
  },
  cardStyle: {
    shadowOffset: {
      height: 5,
      width: 5,
    },
    shadowRadius: 5,
    shadowOpacity: 0.2,
  },
  closeIcon: {
    height: height(2),
    width: height(2),
  },
  closeBtn: {
    marginHorizontal: width(2),
    alignSelf: 'center',
  },
  closeBtnSlop: {
    top: height(1),
    bottom: height(1),
    left: width(2),
    right: width(2),
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
});
