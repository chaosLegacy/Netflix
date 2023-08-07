import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import styles from './styles';

import { MovieProps } from '@/types';

type PosterProps = {
  item: MovieProps;
  onPress(id: string): void;
};

const Poster = ({ item, onPress }: PosterProps) => {
  return (
    <TouchableOpacity onPress={() => onPress(item.id)}>
      <Image style={styles.poster} source={{ uri: item.poster }} />
    </TouchableOpacity>
  );
};

export default Poster;
