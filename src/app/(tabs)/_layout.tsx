import { useColorScheme } from 'react-native';

import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from '@expo/vector-icons';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
} from '@react-navigation/material-top-tabs';
import { withLayoutContext } from 'expo-router';

import Colors from '@/constants/Colors';

const { Navigator } = createMaterialTopTabNavigator();

const MaterialBottomTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator
>(Navigator);
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <MaterialBottomTabs
      tabBarPosition="bottom"
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
          // headerRight: () => (
          //   <Link href="/modal" asChild>
          //     <Pressable>
          //       {({ pressed }) => (
          //         <FontAwesome
          //           name="info-circle"
          //           size={25}
          //           color={Colors[colorScheme ?? 'light'].primary.text}
          //           style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
          //         />
          //       )}
          //     </Pressable>
          //   </Link>
          // ),
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
  );
}
