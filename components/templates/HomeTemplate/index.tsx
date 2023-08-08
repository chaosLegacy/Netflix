import React from 'react';

import styles from './styles';

import { Spinner } from '@/components/atoms/Spinner';
import { View } from '@/components/molecules/Themed';
import CategoriesList from '@/components/organisms/CategoriesList';
import { useGetCategory } from '@/hooks/useCategory';

const HomeTemplate = () => {
  const { data: categories, error, loading } = useGetCategory();
  if (error) {
    return <View />;
  } else if (loading) {
    return <Spinner />;
  }
  return (
    <View style={styles.container}>
      <CategoriesList categories={categories} />
    </View>
  );
};

export default HomeTemplate;
