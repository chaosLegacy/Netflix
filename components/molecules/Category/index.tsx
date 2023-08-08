import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';

import styles from './styles';

import { Text } from '@/components/atoms/Text';
import Poster from '@/components/molecules/Poster';
import { View } from '@/components/molecules/Themed';
import { Category as CategoryType, HomeScreenNavigationProp } from '@/types';

type CategoryProps = {
  category: CategoryType;
};
const Category = ({ category }: CategoryProps) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const onPress = (id: string) => {
    navigation.navigate('DetailScreen', { id });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title} fontWeight="bold" fontSize="xl">
        {category.title}
      </Text>
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
