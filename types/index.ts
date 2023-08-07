import type { PropsWithChildren } from 'react';

import { StackNavigationProp } from '@react-navigation/stack';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

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
  BottomTabsParamList,
  'Home'
>;
// type OrderScreenRouteType = RouteProp<BottomTabsParamList, 'Order'>;

export type {
  SectionProps,
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
  //   OrderScreenRouteType,
};
