import type { PropsWithChildren } from 'react';

import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

type AgeRatingCategory = 'U' | 'PG' | '12' | '15' | '18' | 'R18';
type ResolutionsCategory = 'sd' | 'hd' | '4k' | '8k';

type Movie = {
  id: string;
  poster: string;
};
type Category = {
  id: string;
  title: string;
  movies: Movie[];
};
type CategoriesList = {
  items: Category[];
};

type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

type BottomTabsParamList = {
  Home: undefined;
  ComingSoon: undefined;
  Search: undefined;
  Downloads: undefined;
};

type HomeStackParamList = {
  HomeScreen: undefined;
  DetailScreen: { id: string };
};
type ComingSoonStackParamList = {
  ComingSoonScreen: undefined;
};

type SearchStackParamList = {
  SearchScreen: undefined;
};
type DownloadsStackParamList = {
  DownloadsScreen: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'HomeScreen'
>;
type DetailScreenRouteType = RouteProp<HomeStackParamList, 'DetailScreen'>;

export type {
  SectionProps,
  AgeRatingCategory,
  ResolutionsCategory,
  Movie,
  Category,
  CategoriesList,
  RootStackParamList,
  BottomTabsParamList,
  HomeStackParamList,
  ComingSoonStackParamList,
  SearchStackParamList,
  DownloadsStackParamList,
  HomeScreenNavigationProp,
  DetailScreenRouteType,
};
