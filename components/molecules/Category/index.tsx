import React from 'react';

import { FlashList } from '@shopify/flash-list';

import styles from './styles';

import { Spinner } from '@/components/atoms/Spinner';
import { Text } from '@/components/atoms/Text';
import Poster from '@/components/molecules/Poster';
import { View } from '@/components/molecules/Themed';
import { useGetMovies } from '@/hooks/useMovie';
import { LazyCategory } from '@/models';

type CategoryProps = {
  category: LazyCategory;
};
const Category = ({ category }: CategoryProps) => {
  const { data: movies, error, loading } = useGetMovies(category.id);
  if (error) {
    return <View />;
  } else if (loading) {
    return <Spinner />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title} fontWeight="bold" fontSize="xl">
        {category.title}
      </Text>
      <FlashList
        data={movies}
        renderItem={({ item }) => <Poster item={item} />}
        estimatedItemSize={10}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Category;
