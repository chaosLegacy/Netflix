import React from 'react';
import { ActivityIndicator, useColorScheme } from 'react-native';

import Colors from '@/constants/Colors';

interface SpinnerProps {
  color?: string;
}

export const Spinner: React.FunctionComponent<SpinnerProps> = ({ color }) => {
  const theme = useColorScheme() ?? 'light';
  return <ActivityIndicator color={color || Colors[theme].primary.text} />;
};
