import React from 'react';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

import useCachedResources from '@/hooks/useCachedResources';
import Navigation from '@/navigation';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const App = () => {
  const isLoadingComplete = useCachedResources();

  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <StatusBar />
      <Navigation colorScheme={colorScheme} />
    </SafeAreaProvider>
  );
};

export default App;
