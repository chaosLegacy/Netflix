import React from 'react';

import { FlashList } from '@shopify/flash-list';

import styles from './styles';

import Category from '@/components/molecules/Category';
import { View } from '@/components/molecules/Themed';
import { LazyCategory } from '@/models';

type CategoriesListProps = {
  categories?: LazyCategory[];
};
const CategoriesList = ({ categories }: CategoriesListProps) => {
  return (
    <View style={styles.container}>
      <FlashList
        data={categories}
        renderItem={({ item }) => <Category category={item} />}
        estimatedItemSize={200}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CategoriesList;
