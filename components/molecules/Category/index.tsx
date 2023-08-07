import React from 'react';

import { FlashList } from '@shopify/flash-list';

import styles from './styles';

import Poster from '@/components/molecules/Poster';
import { Text, View } from '@/components/molecules/Themed';
import { Category as CategoryType } from '@/types';

type CategoryProps = {
  category: CategoryType;
};
const Category = ({ category }: CategoryProps) => {
  const onPress = (id: string) => {
    // eslint-disable-next-line no-console
    console.log('id: ', id);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category.title}</Text>
      <FlashList
        data={category.movies}
        renderItem={({ item }) => <Poster item={item} onPress={onPress} />}
        estimatedItemSize={10}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Category;
