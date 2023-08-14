import { Platform, useColorScheme } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
} from '@react-navigation/material-top-tabs';
import { withLayoutContext } from 'expo-router';

import cssStyles from '@/styles/root-layout.module.scss';

import { View } from '@/components/molecules/Themed';
import { Colors } from '@/constants';
import { jsStyles } from '@/constants/StyleGlobal';
import { cns } from '@/utils';

const { Navigator } = createMaterialTopTabNavigator();

const MaterialBottomTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator
>(Navigator);

const TabBar = ({ visible }: { visible: boolean }) => {
  const colorScheme = useColorScheme();
  return (
    <View
      style={[
        {
          paddingBottom: useSafeAreaInsets().bottom,
        },
        Platform.select({
          default: {
            display: visible ? 'flex' : 'none',
          },
          web: cns(cssStyles.smallVisible),
        }),
      ]}>
      <View style={jsStyles.nav}>
        <MaterialBottomTabs
          // tabBarPosition="bottom"
          screenOptions={{
            tabBarIndicatorStyle: { opacity: 0 },
            tabBarLabelStyle: { textTransform: 'capitalize', fontSize: 12 },
            tabBarActiveTintColor: Colors[colorScheme ?? 'light'].primary.tint,
          }}>
          <MaterialBottomTabs.Screen
            name="index"
            options={{
              title: 'Home',
              tabBarIcon: ({ color }) => (
                <AntDesign name="home" size={24} color={color} />
              ),
            }}
          />
          <MaterialBottomTabs.Screen
            name="ComingSoon"
            options={{
              title: 'Coming Soon',
              // tabBarBadge: '1',
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="video-library" size={24} color={color} />
              ),
            }}
          />
          <MaterialBottomTabs.Screen
            name="Search"
            options={{
              title: 'Search',
              tabBarIcon: ({ color }) => (
                <Ionicons name="search" size={24} color={color} />
              ),
            }}
          />
          <MaterialBottomTabs.Screen
            name="Downloads"
            options={{
              title: 'Downloads',
              tabBarIcon: ({ color }) => (
                <AntDesign name="download" size={24} color={color} />
              ),
            }}
          />
        </MaterialBottomTabs>
      </View>
    </View>
  );
};

export default TabBar;
