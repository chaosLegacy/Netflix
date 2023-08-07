import React from 'react';

import styles from './styles';

import categories from '@/assets/data/categories';
import { View } from '@/components/molecules/Themed';
import CategoriesList from '@/components/organisms/CategoriesList';

const HomeTemplate = () => {
  return (
    <View style={styles.container}>
      <CategoriesList categories={categories} />
    </View>
  );
};

export default HomeTemplate;
