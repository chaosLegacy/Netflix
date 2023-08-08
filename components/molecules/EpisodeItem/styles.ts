import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
  rowRoot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cover: {
    height: 100,
    width: Dimensions.get('screen').width / 3,
    resizeMode: 'cover',
  },
  episodeDetail: {
    paddingLeft: 15,
  },
  buttonContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: '#00000065',
  },
  buttonIcon: {
    position: 'absolute',
    left: '35%',
    top: '25%',
    opacity: 0.78,
  },
});

export default styles;
