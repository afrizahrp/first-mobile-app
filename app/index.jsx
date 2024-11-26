// This is the main file of the app. It is the entry point of the app.

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootLayout from './_layout';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        <RootLayout />
      </Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
