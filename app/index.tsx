import React from 'react';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Authenticator } from '@aws-amplify/ui-react-native';
import { Amplify } from 'aws-amplify';
import { StatusBar } from 'expo-status-bar';

import awsExports from '@/aws-exports';
import useCachedResources from '@/hooks/useCachedResources';
import Navigation from '@/navigation';

Amplify.configure({
  ...awsExports,
  Analytics: {
    disabled: true,
  },
});

const App = () => {
  const isLoadingComplete = useCachedResources();

  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  }
  /**
   * New Authenticator Provider of Amplify check the docs
   * https://ui.docs.amplify.aws/react-native/connected-components/authenticator
   */
  return (
    <SafeAreaProvider>
      <Authenticator.Provider>
        <Authenticator>
          <StatusBar />
          <Navigation colorScheme={colorScheme} />
        </Authenticator>
      </Authenticator.Provider>
    </SafeAreaProvider>
  );
};

export default App;
