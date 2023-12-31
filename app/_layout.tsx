import { useColorScheme } from 'react-native';

import '@azure/core-asynciterator-polyfill'; //<--- needed for DataStore to work
import { Authenticator } from '@aws-amplify/ui-react-native';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { Amplify } from 'aws-amplify';
// import 'react-native-reanimated';
// import 'react-native-gesture-handler'
import { Stack } from 'expo-router';

import awsExports from '@/aws-exports';
import useCachedResources from '@/hooks/useCachedResources';

Amplify.configure({
  ...awsExports,
  Analytics: {
    disabled: true,
  },
});

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    /**
     * New Authenticator Provider of Amplify check the docs
     * https://ui.docs.amplify.aws/react-native/connected-components/authenticator
     */
    <Authenticator.Provider>
      <Authenticator>
        <ThemeProvider
          value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
          </Stack>
        </ThemeProvider>
      </Authenticator>
    </Authenticator.Provider>
  );
}
