import { Platform, StyleSheet } from 'react-native';

import { Auth } from 'aws-amplify';
import { StatusBar } from 'expo-status-bar';

import { Button } from '@/components/atoms/Button';
import { Text } from '@/components/atoms/Text';
import EditScreenInfo from '@/components/EditScreenInfo';
import { View } from '@/components/molecules/Themed';

export default function ModalScreen() {
  const logout = () => {
    Auth.signOut();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/modal.tsx" />
      <Button label="log out" onPress={logout} />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
