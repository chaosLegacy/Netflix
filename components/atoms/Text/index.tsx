import React from 'react';
import { StyleProp, TextStyle, useColorScheme } from 'react-native';

import { Text as TextNative } from '@/components/molecules/Themed';
import Colors from '@/constants/Colors';

export type FontWeightProps =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

export type FontSizeProps =
  | 'xs'
  | 'sm'
  | 'md'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl';

export const computeFontSize = (fontSize: FontSizeProps) =>
  fontSize === 'xs'
    ? 11
    : fontSize === 'sm'
    ? 13
    : fontSize === 'md'
    ? 15
    : fontSize === 'xl'
    ? 20
    : fontSize === '2xl'
    ? 24
    : fontSize === '3xl'
    ? 33
    : fontSize === '4xl'
    ? 44
    : fontSize === '5xl'
    ? 55
    : 15;

export type TextProps = {
  children?: React.ReactNode;
  color?: 'primary' | 'secondary' | string;
  fontSize?: FontSizeProps;
  lineHeight?: number;
  fontWeight?: FontWeightProps;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  underline?: boolean;
  lineThrough?: boolean;
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
  letterSpacing?: number;
  numberOfLines?: number;
  onPress?: () => void;
  style?: StyleProp<TextStyle>;
  testID?: string;
};

export const Text = ({
  children,
  color = 'primary',
  fontSize = 'md',
  fontWeight,
  lineHeight,
  textAlign = 'left',
  underline = false,
  textTransform,
  lineThrough = false,
  letterSpacing,
  numberOfLines,
  onPress,
  style,
  testID,
}: TextProps) => {
  const theme = useColorScheme() ?? 'light';
  const themeTextColor =
    color === 'primary'
      ? {
          color: Colors[theme].primary.text,
        }
      : color === 'secondary'
      ? {
          color: Colors[theme].secondary.text,
        }
      : null;

  return (
    <TextNative
      onPress={onPress && onPress}
      numberOfLines={numberOfLines}
      style={[
        {
          fontSize: computeFontSize(fontSize),
          fontWeight,
          textAlign,
          textTransform,
          lineHeight,
          textDecorationLine: underline
            ? 'underline'
            : lineThrough
            ? 'line-through'
            : 'none',
          color,
          letterSpacing,
        },
        themeTextColor,
        style,
      ]}
      testID={testID}>
      {children}
    </TextNative>
  );
};
