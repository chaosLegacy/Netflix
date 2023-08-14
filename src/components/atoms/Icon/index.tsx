import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import * as icons from '@/components/icons';

export type IconTypes = keyof typeof icons;

export type IconProps = {
  name: IconTypes;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
};
export const Icon = ({
  name,
  fill = '#000000',
  stroke,
  width,
  height,
  strokeWidth,
  style,
  ...props
}: IconProps) => {
  const IconComponent = icons[name];
  return (
    <IconComponent
      fill={fill}
      stroke={stroke}
      width={width}
      height={height}
      strokeWidth={strokeWidth}
      {...props}
    />
  );
};
