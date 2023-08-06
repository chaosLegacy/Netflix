import { NavigationContainer, ThemeProvider, DarkTheme, DefaultTheme, } from '@react-navigation/native';
import { Text, useColorScheme } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { HomeScreen, ComingSoonScreen, SearchScreen, DownloadsScreen } from '@/screens';
import React from 'react';
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { BottomTabsParamList, HomeStackParamList, ComingSoonStackParamList, SearchStackParamList, DownloadsStackParamList} from '@/types';
import { createStackNavigator } from '@react-navigation/stack';


const Tab = createMaterialTopTabNavigator<BottomTabsParamList>();

function RouteNavigator() {
    const colorScheme = useColorScheme();
    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            {/* <NavigationContainer> */}
            <Tab.Navigator
                tabBarPosition="bottom"
                screenOptions={{
                    tabBarIndicatorStyle: { opacity: 0 },
                    tabBarLabelStyle: { textTransform: 'capitalize', fontSize: 12 },
                }}>
                <Tab.Screen name="Home" component={HomeStackNavigator} options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="home" size={24} color={color} />
                    ),
                }} />
                <Tab.Screen name="ComingSoon" component={ComingSoonStackNavigator} options={{
                    tabBarLabel: 'Coming Soon',
                    tabBarBadge: () => (<Text>1</Text>),
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="video-library" size={24} color={color} />
                    ),
                }} />
                <Tab.Screen name="Search" component={SearchStackNavigator} options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="search" size={24} color={color} />
                    ),
                }} />
                <Tab.Screen name="Downloads" component={DownloadsStackNavigator} options={{
                    tabBarLabel: 'Downloads',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="download" size={24} color={color} />
                    ),
                }} />
            </Tab.Navigator>
            {/* </NavigationContainer> */}
        </ThemeProvider>
    );
};

// Each tab has it own navigation stack
const HomeStack = createStackNavigator <HomeStackParamList>();
const ComingSoonStack = createStackNavigator<ComingSoonStackParamList>();
const SearchSoonStack = createStackNavigator<SearchStackParamList>();
const DownloadsSoonStack = createStackNavigator<DownloadsStackParamList>();

function HomeStackNavigator() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="HomeScreen" component={HomeScreen}
                options={{ headerShown: false}}
            />
        </HomeStack.Navigator>
    )
};
function ComingSoonStackNavigator() {
    return (
        <ComingSoonStack.Navigator>
            <ComingSoonStack.Screen name="ComingSoonScreen" component={ComingSoonScreen}
                options={{ headerShown: false }}
            />
        </ComingSoonStack.Navigator>
    )
};
function SearchStackNavigator() {
    return (
        <SearchSoonStack.Navigator>
            <SearchSoonStack.Screen name="SearchScreen" component={SearchScreen}
                options={{ headerShown: false }}
            />
        </SearchSoonStack.Navigator>
    )
};
function DownloadsStackNavigator() {
    return (
        <DownloadsSoonStack.Navigator>
            <DownloadsSoonStack.Screen name="DownloadsScreen" component={DownloadsScreen}
                options={{ headerShown: false }}
            />
        </DownloadsSoonStack.Navigator>
    )
};

export default RouteNavigator;