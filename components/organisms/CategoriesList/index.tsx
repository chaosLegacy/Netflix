import React from 'react';

import { FlashList } from '@shopify/flash-list';

import styles from './styles';

import Category from '@/components/molecules/Category';
import { View } from '@/components/molecules/Themed';
import { CategoriesList as CategoriesListTypes } from '@/types';

type CategoriesListProps = {
  categories: CategoriesListTypes;
};
const CategoriesList = ({ categories }: CategoriesListProps) => {
  return (
    <View style={styles.container}>
      <FlashList
        data={categories.items}
        renderItem={({ item }) => <Category category={item} />}
        estimatedItemSize={200}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CategoriesList;
