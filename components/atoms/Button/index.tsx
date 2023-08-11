import React from 'react';
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  useColorScheme,
  View,
  ViewStyle,
} from 'react-native';

import { Spinner } from '../Spinner';
import { computeFontSize, Text } from '../Text';

import styles from './styles';

import Colors from '@/constants/Colors';

export type ButtonProps = {
  type?: 'primary' | 'secondary' | 'grey' | 'text' | 'outline' | 'link';
  label?: string;
  size?: 'small' | 'medium' | 'large' | 'larger';
  textColor?: string;
  rounded?: boolean;
  childrenPosition?: 'none' | 'left' | 'right' | 'bottom';
  childrenSpacing?: 'default' | 'none';
  loading?: boolean;
  backgroundColor?: string;
  disabled?: boolean;
  underlined?: boolean;
  fullWidth?: boolean;
  onPress: () => void;
  onDisabledPress?: () => void;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  testID?: string;
};

const handleButtonSize = (
  size: ButtonProps['size'],
  fullWidth: ButtonProps['fullWidth'],
): StyleProp<ViewStyle> => {
  let selectedSize: StyleProp<ViewStyle> = {};
  switch (size) {
    case 'small':
      selectedSize = { padding: 12 };
      break;
    case 'medium':
      selectedSize = { padding: 14 };
      break;
    case 'large':
      selectedSize = { padding: 16 };
      break;
    case 'larger':
      selectedSize = { padding: 18 };
      break;
  }
  if (fullWidth) {
    selectedSize['width'] = '100%';
  }
  return selectedSize;
};

const handleButtonDisabled = (
  disabled: ButtonProps['disabled'],
): StyleProp<ViewStyle> => {
  if (disabled) {
    return {
      opacity: 0.7,
    };
  } else {
    return {};
  }
};

const layoutIconAndText = (
  children: React.ReactNode,
  childrenPosition: ButtonProps['childrenPosition'],
  childrenSpacing: ButtonProps['childrenSpacing'],
  textElem: JSX.Element,
  loading: boolean,
): JSX.Element => {
  const hSeparator = (
    <View
      style={{
        width: childrenSpacing === 'default' ? 15 : 'auto',
      }}
    />
  );
  const vSeparator = (
    <View
      style={{
        height: childrenSpacing === 'default' ? 15 : 'auto',
      }}
    />
  );
  if (loading) {
    return (
      <View style={styles.flexRowCenter}>
        <Spinner />
      </View>
    );
  }
  if (childrenPosition === 'none' || !children) {
    return textElem;
  } else if (childrenPosition === 'left') {
    return (
      <View style={styles.flexRowCenter}>
        {children}
        {hSeparator}
        {textElem}
      </View>
    );
  } else if (childrenPosition === 'bottom') {
    return (
      <View style={styles.flexColCenter}>
        {children}
        {vSeparator}
        {textElem}
      </View>
    );
  } else {
    return (
      <View style={styles.flexRowCenter}>
        {textElem}
        {hSeparator}
        {children}
      </View>
    );
  }
};

const handleBackgroundColor = (
  theme: 'light' | 'dark',
  type: ButtonProps['type'],
  backgroundColor: ButtonProps['backgroundColor'],
): StyleProp<ViewStyle> => {
  switch (type) {
    case 'primary':
      return {
        backgroundColor: Colors[theme].primary.background,
      };
    case 'secondary':
      return {
        backgroundColor: Colors[theme].secondary.background,
      };
    case 'text':
      return {
        backgroundColor: 'transparent',
      };
    case 'outline':
      return {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: Colors[theme].secondary.background,
      };
    default:
      return {
        backgroundColor,
      };
  }
};

const handleTextStyle = (size: ButtonProps['size']): StyleProp<TextStyle> => {
  switch (size) {
    case 'small':
      return {
        fontSize: computeFontSize('sm'),
        fontWeight: '300',
      };
    case 'medium':
      return {
        fontSize: computeFontSize('md'),
        fontWeight: '500',
      };
    case 'large':
      return {
        fontSize: computeFontSize('xl'),
        fontWeight: '700',
      };
    case 'larger':
      return {
        fontSize: computeFontSize('2xl'),
        fontWeight: '800',
      };
  }
};

export const Button: React.FC<ButtonProps> = ({
  type = 'primary',
  rounded = true,
  label = '',
  size = 'medium',
  textColor,
  childrenPosition = 'none',
  childrenSpacing = 'default',
  loading = false,
  backgroundColor,
  underlined = false,
  disabled = false,
  fullWidth = false,
  onPress,
  onDisabledPress = () => {},
  children,
  style,
  testID,
}) => {
  const theme = useColorScheme() ?? 'light';
  const reverseTheme = theme === 'light' ? 'dark' : 'light';
  const textUnderline = underlined ? 'underline' : undefined;
  const textPrimaryColor =
    type === 'primary'
      ? {
          color: textColor || Colors[reverseTheme].primary.text,
        }
      : type === 'secondary'
      ? {
          color: textColor || Colors[theme].secondary.text,
        }
      : textColor
      ? { color: textColor }
      : null;
  const textElem = (
    <Text
      style={[
        handleTextStyle(size),
        {
          textDecorationLine: textUnderline,
        },
        textPrimaryColor,
      ]}>
      {label}
    </Text>
  );

  return (
    <TouchableOpacity
      testID={testID}
      style={[
        {
          borderRadius: rounded ? 5 : 0,
        },
        handleBackgroundColor(reverseTheme, type, backgroundColor),
        handleButtonSize(size, fullWidth),
        handleButtonDisabled(disabled),
        style,
      ]}
      onPress={() => (disabled ? onDisabledPress() : onPress())}>
      <>
        {layoutIconAndText(
          children,
          childrenPosition,
          childrenSpacing,
          textElem,
          loading,
        )}
      </>
    </TouchableOpacity>
  );
};
