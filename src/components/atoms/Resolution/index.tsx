import React from 'react';
import { StyleProp, useColorScheme, ViewStyle } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import { View } from '@/components/molecules/Themed';
import Colors from '@/constants/Colors';
import { ResolutionsCategory } from '@/types';

type ResolutionProps = {
  category: ResolutionsCategory;
  size?: number;
  style?: StyleProp<ViewStyle>;
};

const Resolution = ({ category, size = 24, style }: ResolutionProps) => {
  const theme = useColorScheme() ?? 'light';
  return (
    <View style={style}>
      <MaterialIcons
        name={category}
        size={size}
        color={Colors[theme].primary.text}
      />
    </View>
  );
};

export default Resolution;
