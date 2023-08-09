import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import { Skeleton } from 'moti/skeleton';

import styles from './styles';

import { useGetStorage } from '@/hooks/useStorage';
import { LazyMovie } from '@/models';

type PosterProps = {
  item: LazyMovie;
  onPress(id: string): void;
};

const Poster = ({ item, onPress }: PosterProps) => {
  const { data: posterUrl, loading } = useGetStorage(item.poster);
  return (
    <TouchableOpacity onPress={() => onPress(item.id)}>
      <Skeleton
        show={loading}
        width={styles.poster.width}
        height={styles.poster.height}>
        {posterUrl ? (
          <Image style={styles.poster} source={{ uri: posterUrl }} />
        ) : null}
      </Skeleton>
    </TouchableOpacity>
  );
};

export default Poster;
