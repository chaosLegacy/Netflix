const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export default {
  light: {
    primary: {
      text: '#000',
      border: '#000',
      background: '#fff',
      tint: tintColorLight,
      tabIconDefault: '#ccc',
      tabIconSelected: tintColorLight,
    },
    secondary: {
      text: '#000',
      border: '#000',
      background: '#444',
      tint: tintColorLight,
      tabIconDefault: '#ccc',
      tabIconSelected: tintColorLight,
    },
  },
  dark: {
    primary: {
      text: '#fff',
      border: '#fff',
      background: '#000',
      tint: tintColorDark,
      tabIconDefault: '#ccc',
      tabIconSelected: tintColorDark,
    },
    secondary: {
      text: '#bbb',
      border: '#fff',
      background: '#000',
      tint: tintColorDark,
      tabIconDefault: '#ccc',
      tabIconSelected: tintColorDark,
    },
  },
};
