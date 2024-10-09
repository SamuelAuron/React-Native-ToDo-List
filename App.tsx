import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Header from './src/components/Header';
import Home from './src';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272727',
    color: '#F2F2F2',
  },
});
