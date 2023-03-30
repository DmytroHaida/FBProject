import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import { AppNavigation } from './src/navigation/AppNavigation';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <AppNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
