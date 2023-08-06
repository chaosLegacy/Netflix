import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import type { PropsWithChildren } from 'react';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

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
}

type SearchStackParamList = {
    SearchScreen: undefined;
};
type DownloadsStackParamList = {
    DownloadsScreen: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<BottomTabsParamList, 'Home'>;
// type OrderScreenRouteType = RouteProp<BottomTabsParamList, 'Order'>;


export type {
  SectionProps,
    RootStackParamList,
    BottomTabsParamList,
    HomeStackParamList,
    ComingSoonStackParamList,
    SearchStackParamList,
    DownloadsStackParamList,
  HomeScreenNavigationProp,
//   OrderScreenRouteType,
};
