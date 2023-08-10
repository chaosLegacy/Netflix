import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cover: {
    width: '100%',
    aspectRatio: 16 / 9,
    resizeMode: 'cover',
  },
  rowContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  match: {
    color: '#79ed79',
    marginRight: 30,
  },
  item: {
    marginHorizontal: 10,
  },
  button: {
    marginBottom: 10,
  },
  detailsContainer: {
    marginTop: 10,
  },
  buttonHorizontal: {
    marginRight: 30,
  },
});

export default styles;
