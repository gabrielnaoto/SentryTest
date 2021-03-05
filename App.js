import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://4484514715374625a0b57a576e6aefa5@o272326.ingest.sentry.io/5662509',
  enableNative: false,
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <View style={styles.buttons}>
        <Button
          title="JavaScript Error"
          onPress={() => { throw new Error("You've thrown a JavaScript error"); }}
        />

        <Button
          title="Native Crash"
          onPress={() => { Sentry.nativeCrash(); }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    margin: 50,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
