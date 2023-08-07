import React from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';

import styles from './styles';

import { AgeRatingCategory } from '@/types';

type AgeRatingProps = {
  category: AgeRatingCategory;
  style?: StyleProp<ViewStyle>;
};
interface AgeRatingContainerProps extends AgeRatingProps {
  children: React.ReactNode;
}
const AgeRatingContainer = ({
  category,
  children,
}: AgeRatingContainerProps): JSX.Element => {
  return <View style={[styles[category], styles.container]}>{children}</View>;
};
const AgeRating = ({ category, style }: AgeRatingProps) => {
  return (
    <AgeRatingContainer category={category} style={style}>
      <Text style={styles.title}>{category} +</Text>
    </AgeRatingContainer>
  );
};

export default AgeRating;
