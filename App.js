import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NewPostScreen from './screens/NewPostScreen';

export default function App() {
  return (
    <SafeAreaProvider style={styles.androidSafeArea}>
      <NewPostScreen />
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  androidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    // paddingTop: Platform.OS === 'android' ? 25 : 0
    paddingTop: 25
  }
});
