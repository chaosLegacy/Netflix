import { StyleSheet } from 'react-native';

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    fontWeight: 'bold',
    // paddingVertical: 12,
    // paddingHorizontal: 10,
    // borderRadius: 4,
    marginTop: 2,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    // paddingHorizontal: 10,
    // paddingVertical: 8,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  viewContainer: {
    width: 125,
    justifyContent: 'center',
    paddingVertical: 12,
  },
});
export default pickerSelectStyles;
