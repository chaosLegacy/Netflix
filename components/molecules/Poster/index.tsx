import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import { Link } from 'expo-router';
import { Skeleton } from 'moti/skeleton';

import styles from './styles';

import { useGetStorage } from '@/hooks/useStorage';
import { LazyMovie } from '@/models';

type PosterProps = {
  item: LazyMovie;
};

const Poster = ({ item }: PosterProps) => {
  const { data: posterUrl, loading } = useGetStorage(item.poster);
  return (
    <Link
      href={{
        pathname: '/detail',
        params: { id: item.id },
      }}
      asChild>
      <TouchableOpacity>
        <Skeleton
          show={loading}
          width={styles.poster.width}
          height={styles.poster.height}>
          {posterUrl ? (
            <Image style={styles.poster} source={{ uri: posterUrl }} />
          ) : null}
        </Skeleton>
      </TouchableOpacity>
    </Link>
  );
};

export default Poster;
