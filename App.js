import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthNavigation from './AuthNavigation';

export default function App() {
  return (
    <SafeAreaProvider style={styles.androidSafeArea}>
      <AuthNavigation />
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
